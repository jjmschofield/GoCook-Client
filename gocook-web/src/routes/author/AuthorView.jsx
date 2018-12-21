// @flow
import React from 'react';
import MainNav from "../../components/nav/MainNav";
import MainContent from "../../components/sections/MainContent";

const AuthorView = () => {
    return (
        <React.Fragment>
            <MainNav/>
            <MainContent>
                <h1>Author Recipes</h1>
            </MainContent>
        </React.Fragment>
    );
};

export default AuthorView;