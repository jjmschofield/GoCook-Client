// @flow
import React, { Component } from 'react';
import { Auth } from './lib/auth'

import { Router } from "./routes";
import MobileMainNav from "./components/app/MobileMainNav";

type Props = {
    auth: Auth,
};

class App extends Component<Props> {
    render() {
        const { auth } = this.props;

        return (
            <React.Fragment>
                <Router auth={auth}/>
                { auth.isAuthenticated() && <MobileMainNav />}
            </React.Fragment>
        )
    }
}

export default App;
