// @flow
import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router';
import {withStyles} from '@material-ui/core/styles';

import AppToolbar from './components/app/AppToolbar';

import NAV_ROUTES from './routes/NAV_ROUTES';
import TodayView from './routes/today/TodayView';
import RecipesView from './routes/recipes/RecipesView';
import PlansView from './routes/plans/PlansView';

type Props = {
    classes: any,
};

const styles = {
    view: {
        padding: "0 24px"
    }
};

class App extends Component<Props> {
    render() {
        return (
            <React.Fragment>
                <AppToolbar routes={Object.values(NAV_ROUTES)}/>
                <div className={this.props.classes.view}>
                    <Switch>
                        <Route path={NAV_ROUTES.TODAY.path} component={TodayView}/>
                        <Route path={NAV_ROUTES.RECIPES.path} component={RecipesView}/>
                        <Route path={NAV_ROUTES.PLANS.path} component={PlansView}/>
                        <Redirect to={NAV_ROUTES.TODAY.path}/>
                    </Switch>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(App);
