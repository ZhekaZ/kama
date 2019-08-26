import React from 'react';
import { NavLink } from 'react-router-dom';
import CONST from '../../CONST';
import s from './users.module.scss'

const Users = props => {

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
                                <img src={
                                    u.photos && u.photos.small ? u.photos.small : CONST.PHOTO_URL
                                } alt=""/>
                            </NavLink>
                            <br/>
                            { u.followed
                                ? <button
                                    // disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={ () => {props.unfollow(u.id)} }>Unfollow</button>
                                : <button
                                    // disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={ () => props.follow(u.id) }>Follow</button>
                            }
                        </div>
                        <div>
                            { u.name }
                            &nbsp;
                            { u.status }
                        </div>
                    </div>
                })
            }
        </div>
    </div>
};

export default Users;
