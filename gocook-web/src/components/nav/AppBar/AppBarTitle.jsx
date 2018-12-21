import React from 'react';
import styled from 'styled-components';

const AppBarTitle = ({ className, title }) => {
    return (
        <h1 className={className}>
            {title}
        </h1>
    )
};

const StyledAppBarTitle = styled(AppBarTitle)`
        flex-grow: 1;
        font-size: 1em;
        font-weight: normal;
`;

export default StyledAppBarTitle;