import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';

import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress, toggleIsFetching,
    unfollow,
} from '../../store/reducers/users.reducer';
import Preloader from '../common/preloader/preloader';
import { usersAPI } from '../../api';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.setUsers(response.items);
            this.props.setTotalUsersCount(response.totalCount);
            this.props.toggleIsFetching(false);
        })
    }

    onPageChanged = p => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(p);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.setUsers(response.items);
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
                toggleFollowingProgress={ this.props.toggleFollowingProgress }
                followingInProgress={ this.props.followingInProgress }
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
        followingInProgress: state.usersPage.followingInProgress,
    }
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress,
})(UsersContainer);
