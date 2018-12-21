// @flow
import React from 'react';
import MainNav from "../../components/nav/MainNav";
import MainContent from "../../components/sections/MainContent";

const ShoppingView = () => {
    return (
        <React.Fragment>
            <MainNav/>
            <MainContent>
                <h1>Shopping</h1>
            </MainContent>
        </React.Fragment>
    );
};

export default ShoppingView;