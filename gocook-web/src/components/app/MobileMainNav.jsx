// @flow
import React, { Component } from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import { withRouter } from "react-router";

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

type Props = {
    classes: any,
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
            <Toolbar>
                <div className={classes.grow}>
                    <Button className={classes.grow} variant="contained" size="small">
                        <SaveIcon />
                    </Button>
                    <Button className={classes.grow} variant="contained" size="small">
                        <SaveIcon />
                    </Button>
                    <Button className={classes.grow} variant="contained" size="small">
                        <SaveIcon />
                    </Button>
                    <Button className={classes.grow} variant="contained" size="small">
                        <SaveIcon />
                    </Button>
                    <Button className={classes.grow} variant="contained" size="small">
                        <SaveIcon />
                    </Button>
                </div>
            </Toolbar>
        );
    };
}

export default withRouter(withStyles(styles)(MobileMainNav));

