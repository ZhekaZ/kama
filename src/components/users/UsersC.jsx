import React from 'react';
import { NavLink } from 'react-router-dom';
import CONST from '../../CONST';
import s from './users.module.scss'
import * as axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get(CONST.BASE_URL + `/users?page=${ this.props.currentPage }&count=${ this.props.pageSize }`)
            .then(response => {
                console.log(response.data);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = p => {
        this.props.setCurrentPage(p);

        axios.get(CONST.BASE_URL + `/users?page=${ p }&count=${ this.props.pageSize }`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    };

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div className={ s.pagination }>
                {
                    pages.map(p =>
                        <span
                            onClick={ () => this.onPageChanged(p) }
                            key={ p }
                            className={ this.props.currentPage === p ? s.active : '' }>
                                { p }
                        </span>)
                }
            </div>
            <div className={ s.users }>
                {
                    this.props.users.map(u => {
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
                                        onClick={ () => {
                                            this.props.unfollow(u.id)
                                        } }>Unfollow</button>
                                    : <button
                                        // disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={ () => this.props.follow(u.id) }>Follow</button>
                                }
                            </div>
                            <div>
                                { u.name }
                                &nbsp;
                                { u.status }
                            </div>
                            {/*<div>*/ }
                            {/*    {u.location.country}*/ }
                            {/*    &nbsp;*/ }
                            {/*    {u.location.city}*/ }
                            {/*</div>*/ }
                        </div>
                    })
                }
            </div>
        </div>
    }

}

export default Users;
