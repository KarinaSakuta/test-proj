import React, { Component } from 'react';
import {Link} from "react-router-dom";
import classnames from 'classnames';

export class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            names: ['page1', 'page2', 'page3', 'page4'],
        };
    }

    componentDidMount() {

    }

    render() {
        const menuClasses = classnames('menu__link', {
            'menu__link menu__link_active': this.state.isBlurNone,
        });
        const names = this.state.names;
        return (
            <div className="menu__container">
                    <h3 className="menu__title">Меню</h3>
                    {names.map((component, i) => <Link to={component} className={menuClasses} key={i}>{component}</Link>)}
            </div>
        );
    }
}