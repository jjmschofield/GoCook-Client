// @flow
import React, {Component} from 'react';

import AppToolbar from './components/AppToolbar';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = 'jss-insertion-point';

type Props = {};

class App extends Component<Props> {
    render() {
        return (
            <JssProvider jss={jss} generateClassName={generateClassName}>
                <AppToolbar />
            </JssProvider>
        );
    }
}

export default App;
