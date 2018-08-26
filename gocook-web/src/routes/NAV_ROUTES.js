// @flow
import React from 'react';
import NavRouteDefinition from '../components/app/NavRouteDefinition';

import BookmarkBorder from '@material-ui/icons/BookmarkBorder';
import CalendarToday from '@material-ui/icons/CalendarToday';
import WbSunny from '@material-ui/icons/WbSunny';

const NAV_ROUTES: NavRouteDefinition[] = [
    new NavRouteDefinition('/today', 'Today', <WbSunny/>),
    new NavRouteDefinition('/recipes', 'Recipes', <BookmarkBorder/>),
    new NavRouteDefinition('/plans', 'Plans', <CalendarToday/>),
];

export default NAV_ROUTES;