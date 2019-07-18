import React from 'react';
import s from './post.module.scss';
import Post from "./Post/Post";

const MyPosts = props => {
    return (
        <div>
            <h2>My posts</h2>
            <textarea></textarea>
            <br/>
            <button>Add post</button>
            <div className={s.posts}>
                <Post message='How are you?' likesCount='0' />
                <Post message='1st post' likesCount='23' />
            </div>
        </div>
    )
};

export default MyPosts;
