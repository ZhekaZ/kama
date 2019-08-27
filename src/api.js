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
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${ currentPage }&count=${ pageSize }`)
            .then(response => response.data);
    },
};

export const followAPI = {
    follow(userId) {
        return instance.get(`follow/${userId}`)
            .then(response => response.data);
    },
};
