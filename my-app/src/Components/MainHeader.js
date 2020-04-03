import React, { Component } from 'react';

export class MainHeader extends Component {

    render() {
        return (
            <div className="header__container">
                <img className="header__logo" src='https://lh3.googleusercontent.com/proxy/C5LZJS9lyHwzH8x8bnHyXhLpZOikFq7rJlzGuOhcIf25rzsMjwjIoK4vQq-X0iTJtI7nMAzKi3NhrxVvTCpPclSMDgRl2jXIWHPG3inH1U7d59loL2F-Q8e_6A_grTzW-2aRmgcDlvVBZW33_4xxngFNXFWCrhK3-XIm4qtE25-KDxklZA' />
                <p className="header__title">Glavnaya</p>
            </div>
        );
    }
}