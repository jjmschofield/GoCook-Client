import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import { Auth } from "./lib/auth";
import { createStore } from './store/store';
import registerServiceWorker from './registerServiceWorker';

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = 'jss-insertion-point';

const store = createStore();
const auth = new Auth();

ReactDOM.render(
    <Provider store={store}>
        <JssProvider jss={jss} generateClassName={generateClassName}>
            <BrowserRouter>
                <App auth={auth}/>
            </BrowserRouter>
        </JssProvider>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
