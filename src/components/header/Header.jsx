import React from 'react';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import logo from '../../logo.svg';

const Header = props => {
    return (
        <AppBar className='header' position="static">
            <IconButton size='small' edge="start" color="inherit" aria-label="Menu">
                <img src={ logo } className="logo" alt="logo"/>
            </IconButton>
            <Typography variant="h6">
                React
            </Typography>

            <IconButton size='small' edge="start" color="inherit" aria-label="Login">
                { props.isAuth
                    ? props.login
                    : <NavLink to={ '/login' }>Login</NavLink> }
            </IconButton>
        </AppBar>
    )
};

export default Header;
