import React from 'react';
import {BrowserRouter as Router,Route,Link, Switch} from "react-router-dom";
import ReactDOM, { render } from 'react-dom';
import States from './components/states/States';
import Example from './components/example/Example';
import Header from './components/Header/Header';
import './p5.css';
ReactDOM.render(

    <div>
        <Header />
        <Router>
            <div className="a">
                <Link className="l" to ="/states">State</Link>
                <Link className="l" to ="/example">Example</Link>
            </div>
            <Switch>
                <Route path="/states" component={States}/>
                <Route path="/example" component={Example}/>
            </Switch>
        </Router>
    </div>
    ,
    document.getElementById('reactapp')
);
