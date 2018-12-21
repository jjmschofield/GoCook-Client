import React from "react";
import Button from "@material-ui/core/Button/Button";
import styled from 'styled-components';

const MobileNavButton = ({ route, icon, onClick, className, active = false }) => {
    const handleClick = () => {
        onClick(route);
    };

    return (
        <Button className={className} size="small" onClick={handleClick.bind(this)} disableRipple>
            {icon}
        </Button>
    )
};

export default styled(MobileNavButton)`
        display: flex;
        flex-grow: 1;
        borderRadius: 0px;
        color: rgba(0,0,0,0.3);
        
        ${props => props.active && `
            color: rgba(0,0,0,1);
        `}
    `;