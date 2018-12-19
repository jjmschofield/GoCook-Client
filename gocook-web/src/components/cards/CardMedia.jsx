import React from 'react';
import styled from 'styled-components';


const CardMedia = ({ className, children }) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
};

export default styled(CardMedia)`
    display: block;
    background-color: rgb(0, 0, 0, 0.08);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${props => props.image || 'none'});
    height: ${props => props.height || '100px'};
`;