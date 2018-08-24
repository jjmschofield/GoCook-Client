// @flow
import React, {Component} from 'react';

import Toolbar from '@material-ui/core/Toolbar';

import AppNavigationTabs from './AppNavigationTabs';
import SearchInput from './SearchInput';
import AvatarMenu from './AvatarMenu';
import CreateButton from './CreateButton';

type Props = {};

class MenuBar extends Component<Props> {
    render() {
        return (
            <Toolbar>
                <AppNavigationTabs />
                <SearchInput />
                <AvatarMenu />
                <CreateButton />
            </Toolbar>
        );
    };
}

export default MenuBar;

