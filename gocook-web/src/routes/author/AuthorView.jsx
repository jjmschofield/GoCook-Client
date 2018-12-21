// @flow
import React from 'react';

import MainContent from "../../components/sections/MainContent";
import AppBar from "../../components/nav/AppBar/AppBar";

const AuthorView = () => {
    return (
        <React.Fragment>
            <AppBar/>
            <MainContent>
                <h1>Author Recipes</h1>
            </MainContent>
        </React.Fragment>
    );
};

export default AuthorView;