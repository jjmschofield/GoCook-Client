import React from 'react';
import styled from 'styled-components';

const Card = ({ className, children }) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
};

export default styled(Card)`
    background-color: #fff;
`