import React from 'react';
import {NavLink} from "react-router-dom";
import s from './navbar.scss';

const NavBar = () => {
    return (
        <nav className="nav">
            Navbar
            <ul>
                <li>
                    <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
                </li>
                <li>
                    <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
                </li>
                <li>Settings</li>
            </ul>
        </nav>
    );
};

export default NavBar;
