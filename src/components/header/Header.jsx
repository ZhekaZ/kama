import React from 'react';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import * as s from './header.scss';
import logo from '../../logo.svg';

const Header = props => {
    console.log(props);
    return (
        <AppBar className='header' position="static">
            <IconButton edge="start" color="inherit" aria-label="Menu">
                <img src={ logo } className="logo" alt="logo"/>
            </IconButton>
            <Typography variant="h6">
                React
            </Typography>

            { props.isAuth
                ? props.login
                : <NavLink to={ '/login' } className='btnLogo'>Login</NavLink> }
        </AppBar>
    )
};

export default Header;
