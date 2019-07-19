import CONST, { randomInt } from '../../CONST';

const profileReducer = (state, action) => {
    switch (action.type) {
        case CONST.ADD_POST:
            const newPost = {
                id: randomInt(1000, 100000),
                message: state.newPostText,
                likesCount: 0,
            };

            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case CONST.UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;

        default:
            return state;
    }
};

// action creators
export const addPostAC = () => ({ type: CONST.ADD_POST });
export const postChangeAC = text => ({ type: CONST.UPDATE_NEW_POST_TEXT, text });

export default profileReducer;
