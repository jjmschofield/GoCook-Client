import React from 'react'
import styled from 'styled-components';

const HorizontalScrollSection = ({children, className})=>{
    return(
        <section className={className}>
            {children}
        </section>
    )
};

export default styled(HorizontalScrollSection)`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: auto;
    justify-content: space-between;
    width:100%;
    padding: 0 0 ${props => props.contentSpacing || '10px'} 0;
    
    > * {
        width: ${props => props.contentWidth || '275px'};
        margin-right: ${props => props.contentSpacing || '10px'};
        flex: 1 0 auto;
    }
`;