import React from "react";
import Button from "@material-ui/core/Button/Button";
import { withStyles } from '@material-ui/core/styles';

const styles = {
    button: {
        flexGrow: 1,
        display: 'flex',
        borderRadius: '0px',
        color: 'rgba(0,0,0,0.3)',
    },
    active:{
        color: 'rgba(0,0,0,1)'
    }
};

const MobileNavButton = ({ route, icon, onClick, classes, active = false }) => {
    const handleClick = () => {
        onClick(route);
    };

    const getClasses = () =>{
        if(window.location.href.includes(route)){
            return `${classes.button} ${classes.active}`
        }

        return classes.button;
    };

    return (
        <Button className={getClasses()} size="small" onClick={handleClick.bind(this)}>
            {icon}
        </Button>
    )
};

export default withStyles(styles)(MobileNavButton);