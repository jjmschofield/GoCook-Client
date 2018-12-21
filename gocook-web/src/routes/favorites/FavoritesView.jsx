// @flow
import React from 'react';
import MainNav from "../../components/nav/MainNav/MainNav";
import MainContent from "../../components/sections/MainContent";
import AppBar from "../../components/nav/AppBar/AppBar";
import RecipeCard from "../../components/cards/RecipeCard";

const FavoritesView = () => {
    return (
        <React.Fragment>
            <AppBar/>
            <MainNav/>
            <MainContent fluid>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
            </MainContent>
        </React.Fragment>
    );
};

export default FavoritesView;