import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {MainHeader} from './MainHeader.js';
import {PAGE_NAMES} from '../constants';

export class Main extends Component {
    renderLinks() {
        return PAGE_NAMES.map((name, i) => 
            <Link to={`/page/${name}`} className="main__button" key={i}>{name}</Link>
        );
    }

    render() {
        const elementsCount = PAGE_NAMES.length;
        const maxWidth = String(elementsCount * 110) + 'px'; 
        console.log(elementsCount);
        return (
            <div className="main">
                <MainHeader/>
                <div className="main__container">
                    <div className="main__buttons-container" style={{ maxWidth: maxWidth}}>
                        {this.renderLinks()}
                    </div>
                </div>
            </div>
        );
    }
}
