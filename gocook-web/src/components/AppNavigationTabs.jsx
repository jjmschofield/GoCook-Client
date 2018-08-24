// @flow
import React, { Component } from 'react';

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import BookmarkBorder from '@material-ui/icons/BookmarkBorder'
import CalendarToday from '@material-ui/icons/CalendarToday'
import WbSunny from '@material-ui/icons/WbSunny'

type Props = {};

type State = {
    value: number
};

class AppNavigationTabs extends Component<Props, State> {
    state = {
        value: 0
    };

    handleTabChange = (event: Event, value: number) => {
        this.setState({ value });
    };

    render() {
        return (
            <div>
                <Tabs
                    value={this.state.value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={this.handleTabChange}
                >
                    <Tab label="Today" href="#today" icon={<WbSunny/>}/>
                    <Tab label="Recipes" href="#recipes" icon={<BookmarkBorder/>}/>
                    <Tab label="Plans" href="#plans" icon={<CalendarToday/>}/>
                </Tabs>
            </div>
        );
    };
}

export default AppNavigationTabs;

