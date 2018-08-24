// @flow
import React, { Component } from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

import AppNavigationTabs from './AppNavigationTabs';
import SearchInput from './SearchInput';
import AvatarMenu from './AvatarMenu';
import CreateButton from './CreateButton';

type Props = {
    classes: any
};

const styles = {
    grow: {
        flexGrow: 1,
    },
    row:{
        display: "flex",
        flexGrow: "0.05",
        justifyContent: "space-between",
        flexDirection: "row",
    }
};

class AppToolbar extends Component<Props> {
    render() {
        const { classes } = this.props;
        return (
            <Toolbar>
                <div className={classes.grow}>
                    <AppNavigationTabs />
                </div>
                <div className={classes.row}>
                    <SearchInput/>
                    <AvatarMenu/>
                    <CreateButton/>
                </div>
            </Toolbar>
        );
    };
}

export default withStyles(styles)(AppToolbar);

