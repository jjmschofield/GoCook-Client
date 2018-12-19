// @flow
import React from 'react';
import styled from 'styled-components';

import MainNav from '../../components/nav/MainNav';
import HorizontalScrollSection from '../../components/sections/HorizontalScrollSection';
import RecipeCard from '../../components/cards/RecipeCard';
import MainContent from '../../components/sections/MainContent';


const StyledRecipeCard = styled(RecipeCard)`
    width: 250px
`;

const BrowseView = () => {
    return (
        <React.Fragment>
            <MainNav/>
            <MainContent>
                <h1>Indian</h1>
                <HorizontalScrollSection>
                    <StyledRecipeCard/>
                    <StyledRecipeCard/>
                    <StyledRecipeCard/>
                    <StyledRecipeCard/>
                    <StyledRecipeCard/>
                    <StyledRecipeCard/>
                    <StyledRecipeCard/>
                    <StyledRecipeCard/>
                    <StyledRecipeCard/>
                    <StyledRecipeCard/>
                </HorizontalScrollSection>
                <h1>Thai</h1>
                <HorizontalScrollSection>
                    <StyledRecipeCard/>
                    <StyledRecipeCard/>
                    <StyledRecipeCard/>
                    <StyledRecipeCard/>
                    <StyledRecipeCard/>
                    <StyledRecipeCard/>
                    <StyledRecipeCard/>
                    <StyledRecipeCard/>
                    <StyledRecipeCard/>
                    <StyledRecipeCard/>
                </HorizontalScrollSection>
                <h1>Italian</h1>
                <HorizontalScrollSection>
                    <StyledRecipeCard/>
                    <StyledRecipeCard/>
                    <StyledRecipeCard/>
                    <StyledRecipeCard/>
                    <StyledRecipeCard/>
                    <StyledRecipeCard/>
                    <StyledRecipeCard/>
                    <StyledRecipeCard/>
                    <StyledRecipeCard/>
                    <StyledRecipeCard/>
                </HorizontalScrollSection>
            </MainContent>
        </React.Fragment>
    );
};

export default BrowseView;