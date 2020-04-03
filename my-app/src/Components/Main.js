import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {MainHeader} from './MainHeader.js';

export class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            names: ['page1', 'page2', 'page3', 'page4'],
        };
    }


    render() {
        const names = this.state.names;
        return (
            <>
                <MainHeader/>
                <div className="main__container">
                    <div className="main__buttons-container">
                        {names.map((component, i) => <Link to={component} className="main__button" key={i}>{component}</Link>)}
                    </div>
                </div>
            </>
        );
    }
}