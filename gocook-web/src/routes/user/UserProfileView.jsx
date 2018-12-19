import React from 'react';

import LogoutButton from '../../components/inputs/LogoutButton';
import MainNav from "../../components/nav/MainNav";
import MainContent from "../../components/sections/MainContent";

const UserProfileView = ({ auth }) => {
    return (
        <React.Fragment>
            <MainNav/>
            <MainContent>
                <h1>Profile</h1>
                <LogoutButton auth={auth}/>
            </MainContent>
        </React.Fragment>
    );
};

export default UserProfileView;