import React from "react";
import { Redirect, Route, Switch } from "react-router";

import { authRestricted } from "../lib/auth/index";
import HomeView from "./home/HomeView";
import AuthorView from "./author/AuthorView";
import BrowseView from "./browse/BrowseViewContainer";
import FavoritesView from "./favorites/FavoritesView";
import ShoppingView from "./shopping/ShoppingView";
import LoginCallbackView from "./login/LoginCallbackView";
import UserProfileView from "./user/UserProfileView";

export const ROUTES = {
    AUTHOR: '/author',
    BROWSE: '/browse',
    FAVORITES: '/favorites',
    HOME: '/',
    LOGIN_CALLBACK: '/login/callback',
    SHOPPING: '/shopping',
    USER_PROFILE: '/user/profile',
};

export const Router = ({ auth }) => {
    return (
        <Switch>
            <Route path={ROUTES.AUTHOR} component={authRestricted(AuthorView, auth)}/>

            <Route path={ROUTES.BROWSE} component={authRestricted(BrowseView, auth)}/>

            <Route path={ROUTES.FAVORITES} component={authRestricted(FavoritesView, auth)}/>

            <Route path={ROUTES.SHOPPING} component={authRestricted(ShoppingView, auth)}/>

            <Route path={ROUTES.USER_PROFILE} component={authRestricted(UserProfileView, auth)}/>

            <Route path={ROUTES.LOGIN_CALLBACK} render={(props) => <LoginCallbackView auth={auth} {...props} />}/>

            <Route path={ROUTES.HOME} render={(props) => <HomeView auth={auth} {...props} />}/>

            <Redirect to={ROUTES.HOME}/>
        </Switch>
    )
};
