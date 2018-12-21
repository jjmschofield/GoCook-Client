import React from 'react';
import styled from 'styled-components';

const Toolbar = ({ className, children }) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};

const StyledToolbar = styled(Toolbar)`
    display: flex;
    padding: 0 16px;
    align-items: center;
    width: 100%;
`;

export default StyledToolbar;
