// @flow
import React from 'react';
import Button from "@material-ui/core/Button/Button";

const HomeView = ({ auth }) => {
    const handleLoginClick = () => {
        auth.login();
    };

    return (
        <React.Fragment>
            <h1>Welcome To Go Cook!</h1>
            {!auth.isAuthenticated() &&
            <Button variant="outlined" color="primary" onClick={handleLoginClick}>
                Login
            </Button>
            }
        </React.Fragment>
    );
};

export default HomeView;