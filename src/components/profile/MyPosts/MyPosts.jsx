import React from 'react';
import s from './myposts.module.scss';
import Post from "./Post/Post";
import { addPostAC, postChangeAC } from "../../../store/reducers/profile.reducer";

const MyPosts = props => {
    const postsElements =
        props.posts.map(p => <Post
            key={ p.id }
            message={ p.message }
            likesCount={ p.likesCount }/>);

    let newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch(addPostAC());
    };

    const onPostChange = () => {
        const text = newPostElement.current.value;

        props.dispatch(postChangeAC(text));
    };

    return (
        <div className={ s.posts }>
            <h2>My posts</h2>
            <textarea
                ref={ newPostElement }
                onChange={ onPostChange }
                value={ props.newPostText }/>
            <br/>
            <button onClick={ addPost }>Add post</button>
            <br/>
            <div className={ s.posts }>
                { postsElements }
            </div>
        </div>
    )
};

export default MyPosts;
