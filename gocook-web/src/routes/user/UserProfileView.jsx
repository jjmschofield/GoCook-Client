import React from 'react';

import LogoutButton from '../../components/inputs/LogoutButton';
import MainContent from "../../components/sections/MainContent";
import AppBar from "../../components/nav/AppBar/AppBar";

const UserProfileView = ({ auth }) => {
    return (
        <React.Fragment>
            <AppBar/>
            <MainContent>
                <h1>Profile</h1>
                <LogoutButton auth={auth}/>
            </MainContent>
        </React.Fragment>
    );
};

export default UserProfileView;