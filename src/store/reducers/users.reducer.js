import CONST from '../../CONST';
import { usersAPI } from '../../api';

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONST.FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                }),
            };

        case CONST.UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                }),
            };

        case CONST.SET_USERS: {
            return { ...state, users: action.users }
        }

        case CONST.SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }

        case CONST.SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.totalUsersCount }
        }

        case CONST.TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }

        case CONST.TOGGLE_IN_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state;
    }
};

// action creators
export const followSuccess = userId => ({ type: CONST.FOLLOW, userId });
export const unfollowSuccess = userId => ({ type: CONST.UNFOLLOW, userId });
export const setUsers = users => ({ type: CONST.SET_USERS, users });
export const setCurrentPage = currentPage => ({ type: CONST.SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = totalUsersCount => ({ type: CONST.SET_TOTAL_USERS_COUNT, totalUsersCount });
export const toggleIsFetching = isFetching => ({ type: CONST.TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: CONST.TOGGLE_IN_FOLLOWING_PROGRESS, isFetching, userId });

// thunks
export const getUsers = (currentPage, pageSize) => dispatch => {
    dispatch(toggleIsFetching(true));

    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(toggleIsFetching(false));
    })
};

export const follow = (userId) => dispatch => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.follow(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        })
};

export const unfollow = (userId) => dispatch => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.unfollow(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        })
};

export default usersReducer;
