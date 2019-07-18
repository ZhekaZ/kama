import React from 'react';
import Post from "./MyPosts/Post/Post";

const Profile = props => {
    return (
        <div>
            <h2>My posts</h2>
            <textarea></textarea>
            <br/>
            <button>Add post</button>
            <div>
                <Post message='How are you?'/>
                <Post message='1st post'/>
            </div>
        </div>
    )
};

export default Profile;
