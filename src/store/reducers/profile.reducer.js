import CONST, { randomInt } from '../../CONST';

const initialState = {
    posts: [
        { id: 11, message: 'How are you?', likesCount: 5 },
        { id: 12, message: 'hello man', likesCount: 3 },
        { id: 13, message: 'you niggar', likesCount: 2 },
        { id: 14, message: 'go back', likesCount: 4 },
    ],
    newPostText: 'kamasutra',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONST.ADD_POST:
            const newPost = {
                id: randomInt(1000, 100000),
                message: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };

        case CONST.UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text,
            };

        case CONST.SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };

        default:
            return state;
    }
};

// action creators
export const addPostAC = () => ({ type: CONST.ADD_POST });
export const postChangeAC = text => ({ type: CONST.UPDATE_NEW_POST_TEXT, text });
export const setUserProfile = profile => ({ type: CONST.SET_USER_PROFILE, profile });

export default profileReducer;
