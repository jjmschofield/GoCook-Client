// @flow
import React from 'react';

import AppBar from '../../components/nav/AppBar/AppBar';
import HorizontalScrollSection from '../../components/sections/HorizontalScrollSection';
import RecipeCard from '../../components/cards/RecipeCard';
import MainContent from '../../components/sections/MainContent';
import { Auth } from "../../lib/auth";

type Props = {
    auth: Auth,
    fetchRecipes: Function
};

type State = {
    loaded: boolean,
};

class BrowseView extends React.Component<Props, State> {
    state: any;

    constructor(props: Props) {
        super(props);

        this.state = {
            loaded: false
        };
    }

    async componentWillMount() {
        await this.props.fetchRecipes(this.props.auth);
        this.setState({ loaded: true });
    }

    render() {
        return (
            <React.Fragment>
                <AppBar/>
                <MainContent loaded={this.state.loaded}>
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
    }
}

export default BrowseView;