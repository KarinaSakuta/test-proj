import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch,} from 'react-router-dom';
import {Main} from './Components/Main.js';
import {ComponentFirst} from './Components/ComponentFirst.js';
import {ComponentSecond} from './Components/ComponentSecond.js';
import {ComponentThird} from './Components/ComponentThird.js';
import {ComponentFourth} from './Components/ComponentFourth.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return (
            <div className="container">
                <BrowserRouter>
                    <Switch>
                        <Route component={Main} exact={true} path="/"></Route>
                        <Route component={ComponentFirst} path="/page1"></Route>
                        <Route component={ComponentSecond} path="/page2"></Route>
                        <Route component={ComponentThird} path="/page3"></Route>
                        <Route component={ComponentFourth} path="/page4"></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
