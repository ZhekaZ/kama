import React from 'react';
import logo from "../../logo.svg";
import * as s from './header.scss';

const Header = props => {
    return (
        <header className={s.header}>
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    )
};

export default Header;
