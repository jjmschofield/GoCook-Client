// @flow
import React, { Component } from 'react';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CreateIcon from '@material-ui/icons/Create';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';

import MobileNavButton from './MobileNavButton';
import { ROUTES } from '../../routes';

type Props = {
    classes: any,
};

const styles = {
    toolbar: {
        flexGrow: 1,
        display: 'flex',
        position: 'fixed',
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: '#fff',
    }
};

class MobileMainNav extends Component<Props> {
    handleClick(route) {
        this.props.history.push(route);
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.toolbar}>
                <MobileNavButton route={ROUTES.BROWSE}
                                 icon={<DashboardIcon/>}
                                 onClick={this.handleClick.bind(this)}
                                 className={classes.button}/>

                <MobileNavButton route={ROUTES.FAVORITES}
                                 icon={<FavoriteBorderIcon/>}
                                 onClick={this.handleClick.bind(this)}
                                 className={classes.button}/>

                <MobileNavButton route={ROUTES.AUTHOR}
                                 icon={<CreateIcon/>}
                                 onClick={this.handleClick.bind(this)}
                                 className={classes.button}/>

                <MobileNavButton route={ROUTES.SHOPPING}
                                 icon={<ShoppingCartIcon/>}
                                 onClick={this.handleClick.bind(this)}
                                 className={classes.button}/>

                <MobileNavButton route={ROUTES.USER_PROFILE}
                                 icon={<PersonIcon/>}
                                 onClick={this.handleClick.bind(this)}
                                 className={classes.button}/>
            </div>
        );
    };
}

export default withRouter(withStyles(styles)(MobileMainNav));

