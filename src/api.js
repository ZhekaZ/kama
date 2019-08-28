import CONST from './CONST';
import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: CONST.BASE_URL,
    headers: {
        'API-KEY': CONST.API_KEY,
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data);
    },

    follow(userId) {
        return instance.post(`follow/${userId}`);
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    },

    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    }
};
