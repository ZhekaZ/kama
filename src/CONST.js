export const CONST = {
    API_KEY: '78682f69-ebac-4a63-a302-50e0eb3ee939',
    ADD_POST: 'ADD-POST',
    BASE_URL: 'https://social-network.samuraijs.com/api/1.0/',
    PHOTO_URL: 'https://randomuser.me/api/portraits/med/lego/6.jpg',
    UPDATE_NEW_POST_TEXT: 'UPDATE-NEW-POST-TEXT',
    UPDATE_NEW_MESSAGE_BODY: 'UPDATE-NEW-MESSAGE-BODY',
    SEND_MESSAGE: 'SEND-MESSAGE',
    FOLLOW: 'FOLLOW',
    UNFOLLOW: 'UNFOLLOW',
    SET_USERS: 'SET_USERS',
    SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT: 'SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FETCHING: 'TOGGLE_IS_FETCHING',
    SET_USER_PROFILE: 'SET_USER_PROFILE',
    SET_USER_DATA: 'SET_USER_DATA',
    TOGGLE_IS_FOLLOWING_PROGRESS: 'TOGGLE_IS_FOLLOWING_PROGRESS',
};

export const randomInt = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
};

export default CONST;
