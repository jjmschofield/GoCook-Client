// @flow
import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router';

import AppToolbar from './components/app/AppToolbar';

import NAV_ROUTES from './routes/NAV_ROUTES';
import TodayView from './routes/today/TodayView';
import RecipesView from './routes/recipes/RecipesView';
import PlansView from './routes/plans/PlansView';

type Props = {};

class App extends Component<Props> {
    render() {
        return (
            <React.Fragment>
                <AppToolbar routes={Object.values(NAV_ROUTES)}/>
                <Switch>
                    <Route path={NAV_ROUTES.TODAY.path} component={TodayView}/>
                    <Route path={NAV_ROUTES.RECIPES.path} component={RecipesView}/>
                    <Route path={NAV_ROUTES.PLANS.path} component={PlansView}/>
                    <Redirect to={NAV_ROUTES.TODAY.path} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;
