// @flow
import React, {Component} from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import BookmarkBorder from '@material-ui/icons/BookmarkBorder'
import CalendarToday from '@material-ui/icons/CalendarToday'
import WbSunny from '@material-ui/icons/WbSunny'
import Search from '@material-ui/icons/Search'


type Props = {};

type State = {
    value: number
};

class MenuBar extends Component<Props, State> {
    state = {
        value: 0
    };

    handleTabChange = (event: Event, value: number) => {
        this.setState({value});
    };

    render() {
        return (
            <Toolbar>
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
                <TextField InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    ),
                }}/>
                <Avatar
                    alt="Jack Schofield"
                    src="https://pbs.twimg.com/profile_images/995933470860988416/OEr44ACY_bigger.jpg"
                />
                <Button variant="outlined" color="primary">
                    Create
                </Button>
            </Toolbar>
        );
    };
}

export default MenuBar;

