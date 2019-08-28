import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';

import {
    follow, unfollow, getUsers, setCurrentPage, toggleFollowingProgress,
} from '../../store/reducers/users.reducer';
import Preloader from '../common/preloader/preloader';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirectComponent';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = p => {
        this.props.getUsers(p, this.props.pageSize);
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

const AuthRedirectComponent = WithAuthRedirect(UsersContainer);

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
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
})(AuthRedirectComponent);
