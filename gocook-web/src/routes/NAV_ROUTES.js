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
};

export default NAV_ROUTES;