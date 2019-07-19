import { randomInt } from "../CONST";
import rerenderOnStateChange from "../render";

const state = {
    profilePage: {
        posts: [
            {id: 11, message: 'How are you?', likesCount: 5},
            {id: 12, message: 'hello man', likesCount: 3},
            {id: 13, message: 'you niggar', likesCount: 2},
            {id: 14, message: 'go back', likesCount: 4},
        ],
        newPostText: 'kamasutra',
    },
    dialogsPage: {
        dialogs: [
            {id: 21, name: 'Dimon'},
            {id: 21, name: 'Osvald'},
            {id: 21, name: 'Larik'},
            {id: 21, name: 'Yanka'},
            {id: 21, name: 'Mashka'},
        ],
        messages: [
            {id: 31, name: 'How are you?'},
            {id: 31, name: 'asdffdskfl  sldkf'},
            {id: 31, name: 'gdsfl; ;g lscsdc'},
            {id: 31, name: 'g;fs ;lfd'},
            {id: 31, name: 'dsf ;fgl;megkl;me'},
        ],
    },
    sidebar: {},
};

export const addPost = () => {
    const newPost = {
        id: randomInt(1000, 100000),
        message: state.profilePage.newPostText,
        likesCount: 0,
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderOnStateChange(state);
};

export const changePost = text => {
    state.profilePage.newPostText = text;
    rerenderOnStateChange(state);
};

window.state = state;

export default state;
