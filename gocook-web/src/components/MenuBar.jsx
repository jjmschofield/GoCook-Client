// @flow
import React, {Component} from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import AppNavigationTabs from './AppNavigationTabs';

import Search from '@material-ui/icons/Search'


type Props = {};

class MenuBar extends Component<Props> {
    render() {
        return (
            <Toolbar>
                <AppNavigationTabs />
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

