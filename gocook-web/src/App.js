// @flow
import React, {Component} from 'react';
import {Switch, Route} from 'react-router'

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
                <AppToolbar routes={NAV_ROUTES}/>
                <Switch>
                    <Route path="/today" component={TodayView}/>
                    <Route path="/recipes" component={RecipesView}/>
                    <Route path="/plans" component={PlansView}/>
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;
