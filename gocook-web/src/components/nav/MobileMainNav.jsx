// @flow
import React, { Component } from 'react';
import { withRouter } from "react-router";
import styled from 'styled-components';

import DashboardIcon from '@material-ui/icons/Dashboard';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CreateIcon from '@material-ui/icons/Create';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';

import MobileNavButton from './MobileNavButton';
import { ROUTES } from '../../routes';

type Props = {
    history: any,
    className: string
};

class MobileMainNav extends Component<Props> {
    handleClick(route) {
        this.props.history.push(route);
    }

    isActiveRoute(route) {
        return window.location.href.includes(route);
    }

    render() {
        return (
            <div className={this.props.className}>
                <MobileNavButton route={ROUTES.BROWSE}
                                 icon={<DashboardIcon/>}
                                 onClick={this.handleClick.bind(this)}
                                 active={this.isActiveRoute(ROUTES.BROWSE)}
                />

                <MobileNavButton route={ROUTES.FAVORITES}
                                 icon={<FavoriteBorderIcon/>}
                                 onClick={this.handleClick.bind(this)}
                                 active={this.isActiveRoute(ROUTES.FAVORITES)}
                />

                <MobileNavButton route={ROUTES.AUTHOR}
                                 icon={<CreateIcon/>}
                                 onClick={this.handleClick.bind(this)}
                                 active={this.isActiveRoute(ROUTES.AUTHOR)}
                />

                <MobileNavButton route={ROUTES.SHOPPING}
                                 icon={<ShoppingCartIcon/>}
                                 onClick={this.handleClick.bind(this)}
                                 active={this.isActiveRoute(ROUTES.SHOPPING)}
                />

                <MobileNavButton route={ROUTES.USER_PROFILE}
                                 icon={<PersonIcon/>}
                                 onClick={this.handleClick.bind(this)}
                                 active={this.isActiveRoute(ROUTES.USER_PROFILE)}
                />
            </div>
        );
    };
}

const StyledMobileNav = styled(MobileMainNav)`
        display: flex;
        flex-grow: 1;
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: #fff;
    `;

export default withRouter(StyledMobileNav);

