import React from 'react';
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton/IconButton";

const MenuButton = ({ className }) => {
    return (
        <IconButton className={className} color="inherit" aria-label="Menu">
            <MenuIcon/>
        </IconButton>
    )
};

export default MenuButton;