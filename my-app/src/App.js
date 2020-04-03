import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Main} from './Components/Main.js';
import {ComponentFirst} from './Components/ComponentFirst.js';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <Switch>
                        <Route component={Main} exact={true} path="/"></Route>
                        <Route component={ComponentFirst} path="/page/:name"></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
