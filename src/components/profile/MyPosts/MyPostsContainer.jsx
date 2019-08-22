import React from 'react';
import { addPostAC, postChangeAC } from "../../../store/reducers/profile.reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = props => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    const state = store.getState().profilePage;

                    const addPost = () => {
                        const action = addPostAC();
                        store.dispatch(action);
                    };

                    const onPostChange = text => {
                        const action = postChangeAC(text);
                        store.dispatch(action);
                    };

                    return <MyPosts
                        posts={ state.posts }
                        newPostText={ state.newPostText }
                        addPost={ addPost }
                        updatePost={ onPostChange } />
                }
            }
        </StoreContext.Consumer>
    )
};

export default MyPostsContainer;
