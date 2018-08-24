// @flow
import React, {Component} from 'react';

import AppToolbar from './components/AppToolbar';

type Props = {};

class App extends Component<Props> {
    render() {
        return (
            <div className="App">
                <AppToolbar />
            </div>
        );
    }
}

export default App;
