import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const StyledCardMedia = styled(CardMedia)`
    height: 250px
`;

const RecipeCard = () => {
    return (
        <Card>
            <StyledCardMedia
                image="https://material-ui.com/static/images/cards/paella.jpg"
                title="Paella dish"
            />
            <CardContent>
                <Typography component="h1">
                    Shrimp and Chorizo Paella
                </Typography>
            </CardContent>
        </Card>
    )
};

export default RecipeCard;
