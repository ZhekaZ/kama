import React from 'react';
import { addPostAC, postChangeAC } from "../../../store/reducers/profile.reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = props => {
    const state = props.store.getState();

    const addPost = () => {
        const action = addPostAC();
        props.store.dispatch(action);
    };

    const onPostChange = text => {
        const action = postChangeAC(text);
        props.store.dispatch(action);
    };

    return (
        <MyPosts
            posts={ state.profilePage.posts }
            newPostText={ state.profilePage.newPostText }
            addPost={ addPost }
            updatePost={ onPostChange }/>
    )
};

export default MyPostsContainer;
