import React from 'react';
import styled from 'styled-components';

import MenuButton from '../../inputs/MenuButton';
import SearchButton from '../../inputs/SearchButton';
import AppBarTitle from './AppBarTitle'
import MainNav from "../MainNav/MainNav";
import Toolbar from "./Toolbar";

const StyledMenuButton = styled(MenuButton)`
    margin-left: -12px;
    margin-right: 20px;
`;

const StyledSearchButton = styled(SearchButton)`
    margin-right: -12px;
`;

const AppBar = ({ className }) => {
    return (
        <div className={className}>
            <Toolbar>
                <StyledMenuButton />
                <AppBarTitle title='GoCook'/>
                <MainNav/>
                <StyledSearchButton />
            </Toolbar>
        </div>
    );
};

const StyledAppBar = styled(AppBar)`
    background-color: #fff;
    display: flex;
    min-height: 56px;
    width: 100%;
    position: fixed;
`;

export default StyledAppBar;