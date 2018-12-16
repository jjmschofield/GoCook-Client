import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import { Auth } from "./lib/auth";

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = 'jss-insertion-point';

const auth = new Auth();

ReactDOM.render(
    <JssProvider jss={jss} generateClassName={generateClassName}>
        <BrowserRouter>
            <App auth={auth}/>
        </BrowserRouter>
    </JssProvider>,
    document.getElementById('root')
);

registerServiceWorker();
