import React, { Component } from 'react';
import {Link} from "react-router-dom";
import classnames from 'classnames';
import {PAGE_NAMES} from '../constants';
import {withRouter} from 'react-router-dom';

class Menu extends Component {
    renderLinks() {
        return PAGE_NAMES.map((name, i) => {
            const link = `/page/${name}`;
            const isCurrentPage = (link === this.props.location.pathname);
            const linkClasses = classnames('menu__link', {
                'menu__link_active': isCurrentPage,
            });

            return (<Link to={link} className={linkClasses} key={i}>{name}</Link>);
        });
    }

    render() {
        return (
            <div className="menu__container">
                <h3 className="menu__title">Меню</h3>
                {this.renderLinks()}
            </div>
        );
    }
}

const MenuWithRouter = withRouter(Menu);

export { MenuWithRouter as Menu };
