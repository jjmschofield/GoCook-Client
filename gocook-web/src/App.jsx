// @flow
import React, { Component } from 'react';
import { Auth } from './lib/auth'

import AppToolbar from './components/app/AppToolbar';
import NAV_ROUTES from './routes/NAV_ROUTES';
import MainView from "./components/app/MainView";

type Props = {
    auth: Auth,
};

class App extends Component<Props> {
    render() {
        const { auth } = this.props;

        return (
            <React.Fragment>
                {auth.isAuthenticated() && <AppToolbar auth={auth} routes={Object.values(NAV_ROUTES)}/>}
                <MainView auth={auth}/>
            </React.Fragment>
        )
    }
}

export default App;
