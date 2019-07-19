import React from 'react';
// import Post from "./MyPosts/Post/Post";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = props => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={ props.state.posts }
                newPostText={ props.state.newPostText }
                addPost={ props.addPost }
                changePost={ props.changePost }
            />
        </div>
    )
};

export default Profile;
