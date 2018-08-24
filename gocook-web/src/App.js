// @flow
import React, {Component} from 'react';

import MenuBar from './components/MenuBar';
import logo from './logo.svg';
import './App.css';

type Props = {};

class App extends Component<Props> {
    render() {
        return (
            <div className="App">
                <MenuBar />
            </div>
        );
    }
}

export default App;
