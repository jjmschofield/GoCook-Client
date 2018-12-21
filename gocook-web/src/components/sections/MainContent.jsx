import React from 'react'
import styled from 'styled-components';

const MainContent = ({children, className})=>{
    return(
        <section className={className}>
            {children}
        </section>
    )
};

export default styled(MainContent)`
    padding: 10px 10px 75px;
`;