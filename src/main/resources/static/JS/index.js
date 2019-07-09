import React from "react";
import ReactDOM from 'react-dom';
import Routes from './routes.js';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
    , document.getElementById('app')
);