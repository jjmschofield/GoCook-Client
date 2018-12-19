import React from 'react';
import styled from 'styled-components';


const CardContent = ({ className, children }) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
};

export default styled(CardContent)`
    padding: 8px
    background-color: rgb(0, 0, 0, 0.02);
    
     h1 {
        margin:5px 0;
        font-size:0.9em;
     }
     
     p {
        font-size:0.75em
     }
`;