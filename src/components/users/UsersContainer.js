import CONST from "../../CONST";
import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import Users from "./Users";

import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC
} from '../../store/reducers/users.reducer';

class UsersContainer extends React.Component {

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
        return <Users
            totalUsersCount={ this.props.totalUsersCount }
            pageSize={ this.props.pageSize }
            currentPage={ this.props.currentPage }
            users={ this.props.users }
            follow={ this.props.follow }
            unfollow={ this.props.unfollow }
            onPageChanged={ this.onPageChanged }
        />
    }

}

const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        follow: userId => {
            dispatch(followAC(userId));
        },
        unfollow: userId => {
            dispatch(unfollowAC(userId));
        },
        setUsers: users => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: currentPage => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: totalUsersCount => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
