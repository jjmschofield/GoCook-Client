// @flow
import React, { Component } from 'react';

import { Auth } from './lib/auth'
import { Router } from "./routes";

import config from './config';

console.log(config);

type Props = {
    auth: Auth,
};

class App extends Component<Props> {
    render() {
        const { auth } = this.props;

        return (
            <React.Fragment>
                <Router auth={auth}/>
            </React.Fragment>
        )
    }
}

export default App;
