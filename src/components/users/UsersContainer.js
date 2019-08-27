import CONST from '../../CONST';
import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users';

import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow,
} from '../../store/reducers/users.reducer';
import Preloader from '../common/preloader/preloader';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);

        axios.get(CONST.BASE_URL + `/users?page=${ this.props.currentPage }&count=${ this.props.pageSize }`, {
            withCredentials: true,
            // headers: {
            //     'API-KEY': CONST.API_KEY,
            // },
        })
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.toggleIsFetching(false);
            })
    }

    onPageChanged = p => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(p);

        axios.get(CONST.BASE_URL + `/users?page=${ p }&count=${ this.props.pageSize }`, {
            withCredentials: true,
            // headers: {
            //     'API-KEY': CONST.API_KEY,
            // },
        })
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false);
            })
    };

    render() {
        return <>
            { this.props.isFetching ? <Preloader/> : null }
            <Users
                totalUsersCount={ this.props.totalUsersCount }
                pageSize={ this.props.pageSize }
                currentPage={ this.props.currentPage }
                users={ this.props.users }
                follow={ this.props.follow }
                unfollow={ this.props.unfollow }
                isFetching={ this.props.isFetching }
                onPageChanged={ this.onPageChanged }
            />
        </>
    }

}

const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersContainer);
