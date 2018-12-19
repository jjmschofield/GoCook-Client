import React from 'react';
import Card from './Card';
import CardMedia from './CardMedia';
import CardContent from './CardContent';
import loremIpsum from 'lorem-ipsum';

const RecipeCard = () => {
    return (
        <Card>
            <CardMedia
                image={`https://picsum.photos/200/300/?random&${Math.random() * 100}`}
                height="200px"
                title="Paella dish"
            />
            <CardContent>
                <h1>{loremIpsum({ count: 5, units: 'words' })}</h1>
                <p>{loremIpsum({ count: 25, units: 'words' })}</p>
            </CardContent>
        </Card>
    )
};

export default RecipeCard;
