// @flow
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import Auth from './lib/auth';

import AppToolbar from './components/app/AppToolbar';

import NAV_ROUTES from './routes/NAV_ROUTES';
import TodayView from './routes/today/TodayView';
import RecipesView from './routes/recipes/RecipesView';
import PlansView from './routes/plans/PlansView';
import LoginCallbackView from './routes/login/LoginCallbackView';
import LoginView from './routes/login/LoginView';

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

    anonymousView() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path={NAV_ROUTES.LOGIN_CALLBACK.path} render={(props) => <LoginCallbackView auth={auth} {...props} />}/>
                    <Route path={NAV_ROUTES.LOGIN.path} render={(props) => <LoginView auth={auth} {...props} />}/>
                    <Redirect to={NAV_ROUTES.LOGIN.path}/>
                </Switch>
            </React.Fragment>
        )
    }

    authenticatedView() {
        return (
            <React.Fragment>
                <AppToolbar routes={Object.values(NAV_ROUTES)}/>
                <div className={this.props.classes.view}>
                    <Switch>
                        <Route path={NAV_ROUTES.TODAY.path} component={TodayView}/>
                        <Route path={NAV_ROUTES.RECIPES.path} component={RecipesView}/>
                        <Route path={NAV_ROUTES.PLANS.path} component={PlansView}/>
                        <Route path={NAV_ROUTES.LOGIN_CALLBACK.path} component={LoginCallbackView}/>
                        <Redirect to={NAV_ROUTES.TODAY.path}/>
                    </Switch>
                </div>
            </React.Fragment>
        );
    }

    render() {
        if (!auth.isAuthenticated()) {
            return this.anonymousView()
        }
        return this.authenticatedView();
    }
}

export default withStyles(styles)(App);
