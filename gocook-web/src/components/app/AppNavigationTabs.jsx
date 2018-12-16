// @flow
import React, {Component} from 'react';
import {withRouter} from 'react-router';

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import NavRouteDefinition from "./NavRouteDefinition";

type Props = {
    history: string[],
    routes: NavRouteDefinition[]
};

type State = {
    activeTabIndex: number
};

class AppNavigationTabs extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }



    render() {
        return (
            <div>

            </div>
        );
    };
}

export default withRouter(AppNavigationTabs);
