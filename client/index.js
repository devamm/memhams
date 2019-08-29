import React from "react";
import ReactDOM from 'react-dom';
import Routes from './routes.js';
import {BrowserRouter} from 'react-router-dom';
import history from './history.js'
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <Routes/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('app')
);