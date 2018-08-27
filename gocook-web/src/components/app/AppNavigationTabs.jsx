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

    state = {
        activeTabIndex: 0
    };

    handleTabChange = (event: Event, selectedTabIndex: number) => {
        this.setState({
            activeTabIndex: selectedTabIndex
        });
        this.props.history.push(this.props.routes[selectedTabIndex].path);
    };

    renderTabs() {
        return this.props.routes.map((route) => {
            if (route.enabled) {
                return <Tab label={route.name} icon={route.icon}/>
            }
        });
    }

    render() {
        return (
            <div>
                <Tabs
                    value={this.state.activeTabIndex}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={this.handleTabChange}
                >
                    {this.renderTabs()}
                </Tabs>
            </div>
        );
    };
}

export default withRouter(AppNavigationTabs);
