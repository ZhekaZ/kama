import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './users.module.scss'

import CONST from '../../CONST';

import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        margin: 0 + ' auto',
        width: 100,
        height: 100,
    },
});

const Users = props => {

    const classes = useStyles();
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={ s.pagination }>
            {
                pages.map(p =>
                    <span
                        onClick={ () => props.onPageChanged(p) }
                        key={ p }
                        className={ props.currentPage === p ? s.active : '' }>
                                { p }
                        </span>)
            }
        </div>
        <div className={ s.users }>
            {
                props.users.map(u => {
                    return <div key={ u.id } className={ s.user }>
                        <div>
                            <NavLink to={ '/profile/' + u.id }>
                                <Avatar className={ classes.bigAvatar }
                                        src={ u.photos && u.photos.small ? u.photos.small : CONST.PHOTO_URL
                                        } alt=""/>
                            </NavLink>
                            { u.followed
                                ? <Button variant="contained" color="secondary" size="small" className={ s.btnFollow }
                                          disabled={ props.followingInProgress.some(id => id === u.id) }
                                          onClick={ () => {
                                              props.unfollow(u.id)
                                          } }>Unfollow</Button>
                                : <Button variant="contained" color="default" size="small" className={ s.btnFollow }
                                          disabled={ props.followingInProgress.some(id => id === u.id) }
                                          onClick={ () => {
                                              props.follow(u.id)
                                          } }>Follow</Button>
                            }
                        </div>
                        <div>{ u.name }&nbsp;{ u.status }</div>
                    </div>
                })
            }
        </div>
    </div>
};

export default Users;
