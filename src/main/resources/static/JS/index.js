import React from "react";
import ReactDOM from 'react-dom';
import Routes from './routes.js';
import {BrowserRouter} from 'react-router-dom';
import history from './history.js'

ReactDOM.render(
    <BrowserRouter history={history}>
        <Routes/>
    </BrowserRouter>
    , document.getElementById('app')
);