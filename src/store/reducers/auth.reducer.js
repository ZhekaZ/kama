import CONST from '../../CONST';
import { authAPI } from "../../api";

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONST.SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };

        default:
            return state;
    }
};

// action creators
export const setAuthUserData = (userId, email, login) => ({ type: CONST.SET_USER_DATA, data: { userId, email, login } });

// thunks
export const getAuthUserData = () => dispatch => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        })
};

export default authReducer;
