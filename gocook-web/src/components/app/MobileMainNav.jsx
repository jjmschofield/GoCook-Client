// @flow
import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';


import { withRouter } from "react-router";

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CreateIcon from '@material-ui/icons/Create';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';

type Props = {
    classes: any,
};

const styles = {
    toolbar: {
        flexGrow: 1,
        display: 'flex',
        position:'absolute',
        left:0,
        bottom:0,
        right:0,
    },
    button: {
        flexGrow: 1,
        display: 'flex',
        borderRadius: '0px'
    }
};

class MobileMainNav extends Component<Props> {
    state = {
        activeTabIndex: 0
    };

    handleTabChange = (event: Event, selectedTabIndex: number) => {
        this.setState({
            activeTabIndex: selectedTabIndex
        });
        this.props.history.push(`/browse/${selectedTabIndex}`);
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.toolbar}>
                <Button className={classes.button} size="small">
                    <DashboardIcon />
                </Button>
                <Button className={classes.button} size="small">
                    <FavoriteBorderIcon />
                </Button>
                <Button className={classes.button} size="small">
                    <CreateIcon />
                </Button>
                <Button className={classes.button} size="small">
                    <ShoppingCartIcon />
                </Button>
                <Button className={classes.button} size="small">
                    <PersonIcon />
                </Button>
            </div>
        );
    };
}

export default withRouter(withStyles(styles)(MobileMainNav));

