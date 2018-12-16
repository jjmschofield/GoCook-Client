// @flow
import React, { Component } from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

import AppNavigationTabs from './AppNavigationTabs';
import SearchInput from '../inputs/SearchInput';
import AvatarMenu from '../menus/AvatarMenu';
import CreateButton from '../inputs/CreateButton';
import LogoutButton from '../inputs/LogoutButton';
import NavRouteDefinition from "./NavRouteDefinition";
import Auth from '../../lib/auth/Auth';

type Props = {
    auth: Auth,
    classes: any,
    routes: NavRouteDefinition[]
};

const styles = {
    grow: {
        flexGrow: 1,
    },
    row: {
        display: "flex",
        flexGrow: "0.05",
        justifyContent: "space-between",
        flexDirection: "row",
    }
};

class AppToolbar extends Component<Props> {
    render() {
        const { classes, auth } = this.props;
        return (
            <Toolbar>
                <div className={classes.grow}>
                    <AppNavigationTabs routes={this.props.routes}/>
                </div>
                <div className={classes.row}>
                    <SearchInput/>
                    <AvatarMenu/>
                    <CreateButton/>
                    <LogoutButton auth={auth}/>
                </div>
            </Toolbar>
        );
    };
}

export default withStyles(styles)(AppToolbar);

