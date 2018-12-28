import React from 'react'
import styled from 'styled-components';

const MainContent = ({ children, className, loaded = true }) => {
    if (!loaded) {
        return null;

    }

    return (
        <section className={className}>
            {children}
        </section>
    )
};

export default styled(MainContent)`
    padding: 56px 10px;
    
    ${props => props.fluid && `
        padding-left:0px;
        padding-right:0px;
    `}
`;