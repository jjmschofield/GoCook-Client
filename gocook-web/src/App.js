// @flow
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { withStyles } from '@material-ui/core/styles';

import { Auth, authRestricted } from './lib/auth'

import AppToolbar from './components/app/AppToolbar';

import NAV_ROUTES from './routes/NAV_ROUTES';
import TodayView from './routes/today/TodayView';
import RecipesView from './routes/recipes/RecipesView';
import PlansView from './routes/plans/PlansView';
import LoginCallbackView from './routes/login/LoginCallbackView';


type Props = {
    classes: any,
};

const styles = {
    view: {
        padding: "0 24px"
    }
};

const auth = new Auth();

class App extends Component<Props> {
    render() {
        return (
            <React.Fragment>
                {auth.isAuthenticated() && <AppToolbar routes={Object.values(NAV_ROUTES)}/>}
                <div className={this.props.classes.view}>
                    <Switch>
                        <Route path={NAV_ROUTES.TODAY.path} component={authRestricted(TodayView, auth)}/>
                        <Route path={NAV_ROUTES.RECIPES.path} component={authRestricted(RecipesView, auth)}/>
                        <Route path={NAV_ROUTES.PLANS.path} component={authRestricted(PlansView, auth)}/>
                        <Route path={NAV_ROUTES.LOGIN_CALLBACK.path}
                               render={(props) => <LoginCallbackView auth={auth} {...props} />}/>
                        <Redirect to={NAV_ROUTES.TODAY.path}/>
                    </Switch>
                </div>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(App);
