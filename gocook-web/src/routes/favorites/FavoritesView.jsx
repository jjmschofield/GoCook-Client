// @flow
import React from 'react';
import MainNav from "../../components/nav/MainNav";
import MainContent from "../../components/sections/MainContent";

const FavoritesView = () => {
    return (
        <React.Fragment>
            <MainNav/>
            <MainContent>
                <h1>Favorite Recipes</h1>
            </MainContent>
        </React.Fragment>

    );
};

export default FavoritesView;