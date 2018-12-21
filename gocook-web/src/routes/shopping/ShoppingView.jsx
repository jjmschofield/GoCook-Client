// @flow
import React from 'react';
import MainContent from "../../components/sections/MainContent";
import AppBar from "../../components/nav/AppBar/AppBar";

const ShoppingView = () => {
    return (
        <React.Fragment>
            <AppBar/>
            <MainContent>
                <h1>Shopping</h1>
            </MainContent>
        </React.Fragment>
    );
};

export default ShoppingView;