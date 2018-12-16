import React from 'react';

import LogoutButton from '../../components/inputs/LogoutButton';
import MainNav from "../../components/nav/MainNav";

const UserProfileView = ({ auth }) => {
    return (
        <React.Fragment>
            <h1>Profile</h1>
            <LogoutButton auth={auth}/>
            <MainNav/>
        </React.Fragment>
    );
};

export default UserProfileView;