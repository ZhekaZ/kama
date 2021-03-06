import React from 'react';
import s from './myposts.module.scss';
import Post from "./Post/Post";

const MyPosts = props => {
    const postsElements =
        props.posts.map(p => <Post
            key={ p.id }
            message={ p.message }
            likesCount={ p.likesCount }/>);

    let newPostElement = React.createRef();

    const onAddPost = () => {
        props.addPost();
    };

    const onPostChange = () => {
        const text = newPostElement.current.value;

        props.updatePost(text);
    };

    return (
        <div className={ s.posts }>
            <h2>My posts</h2>
            <textarea
                ref={ newPostElement }
                onChange={ onPostChange }
                value={ props.newPostText }/>
            <br/>
            <button onClick={ onAddPost }>Add post</button>
            <br/>
            <div className={ s.posts }>
                { postsElements }
            </div>
        </div>
    )
};

export default MyPosts;
