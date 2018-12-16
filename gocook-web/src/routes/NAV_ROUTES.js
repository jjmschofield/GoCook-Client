// @flow
import React from 'react';
import NavRouteDefinition from '../components/app/NavRouteDefinition';

import BookmarkBorder from '@material-ui/icons/BookmarkBorder';
import CalendarToday from '@material-ui/icons/CalendarToday';
import WbSunny from '@material-ui/icons/WbSunny';

const NAV_ROUTES = {
    TODAY: new NavRouteDefinition('/today', 'Today', <WbSunny/>, true),
    RECIPES: new NavRouteDefinition('/recipes', 'Recipes', <BookmarkBorder/>, true),
    PLANS: new NavRouteDefinition('/plans', 'Plans', <CalendarToday/>, true),
    LOGIN: new NavRouteDefinition('/login', null, null, false),
    LOGIN_CALLBACK: new NavRouteDefinition('/login/callback', null, null, false),
    HOME: new NavRouteDefinition('/', null, null, false),
};

export default NAV_ROUTES;
