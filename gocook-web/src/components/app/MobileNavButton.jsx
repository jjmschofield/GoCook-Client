import React from "react";
import Button from "@material-ui/core/Button/Button";
import { withStyles } from '@material-ui/core/styles';

const styles = {
    button: {
        flexGrow: 1,
        display: 'flex',
        borderRadius: '0px'
    }
};

const MobileNavButton = ({ route, icon, onClick, classes }) => {
    const handleClick = () => {
        onClick(route);
    };

    return (
        <Button className={classes.button} size="small" onClick={handleClick.bind(this)}>
            {icon}
        </Button>
    )
};

export default withStyles(styles)(MobileNavButton);