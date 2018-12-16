// @flow
import React from 'react';
import Button from "@material-ui/core/Button/Button";
import { ROUTES } from '../../routes';

const HomeView = ({ auth, history }) => {
    const handleLoginClick = () => {
        auth.login();
    };

    if (auth.isAuthenticated()) {
        history.push(ROUTES.BROWSE);
    }

    return (
        <React.Fragment>
            <h1>Welcome To Go Cook!</h1>
            {!auth.isAuthenticated() &&
            <Button variant="outlined" color="primary" onClick={handleLoginClick}>
                Login
            </Button>
            }
            <div>
                <br/>
                <img src="https://i.giphy.com/media/demgpwJ6rs2DS/giphy.webp"/>
            </div>
        </React.Fragment>
    );
};

export default HomeView;