import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRouter, hashHistory} from "react-router";

import Home from './routes/Home.jsx';
import Store from './routes/Store.jsx';


const app = document.getElementById( "app" );
ReactDOM.render( 
        <Router history={hashHistory}>
            <Route path='/' component={Home}></Route>
            <Route path='/store' component={Store}></Route>
        </Router>
        , app)