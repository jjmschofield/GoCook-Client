import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton/IconButton";

const SearchButton = ({ className }) => {
    return (
        <IconButton className={className} color="inherit" aria-label="Menu">
            <SearchIcon/>
        </IconButton>
    )
};

export default SearchButton;