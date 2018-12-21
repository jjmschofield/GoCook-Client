// @flow
import React from 'react';

import AppBar from '../../components/nav/AppBar/AppBar';
import MainNav from '../../components/nav/MainNav/MainNav';
import HorizontalScrollSection from '../../components/sections/HorizontalScrollSection';
import RecipeCard from '../../components/cards/RecipeCard';
import MainContent from '../../components/sections/MainContent';

const BrowseView = () => {
    return (
        <React.Fragment>
            <AppBar/>
            <MainContent>
                <h1>Indian</h1>
                <HorizontalScrollSection>
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
                </HorizontalScrollSection>
                <h1>Thai</h1>
                <HorizontalScrollSection>
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
                </HorizontalScrollSection>
                <h1>Italian</h1>
                <HorizontalScrollSection>
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
                </HorizontalScrollSection>
            </MainContent>
        </React.Fragment>
    );
};

export default BrowseView;