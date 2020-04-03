import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import {Main} from './Components/Main.js';
import {ComponentFirst} from './Components/ComponentFirst.js';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <HashRouter>
                    <Switch>
                        <Route component={Main} exact={true} path="/"></Route>
                        <Route component={ComponentFirst} path="/page/:name"></Route>
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

export default App;
