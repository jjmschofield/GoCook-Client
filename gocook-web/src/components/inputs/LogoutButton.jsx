// @flow
import React from 'react';

import Button from '@material-ui/core/Button';
import { withRouter } from "react-router";

const LogoutButton = ({ auth, history }) => {
    const handleLogoutClick = () => {
        auth.logout();
        history.push('/');
    };

    return (
        <Button variant="outlined" color="primary" onClick={handleLogoutClick}>
            Logout
        </Button>
    );
};

export default withRouter(LogoutButton);
