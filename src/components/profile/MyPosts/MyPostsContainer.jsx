import { connect } from "react-redux";
import { addPostAC, postChangeAC } from "../../../store/reducers/profile.reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = state => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addPost: () => {
            const action = addPostAC();
            dispatch(action);
        },
        updatePost: text => {
            const action = postChangeAC(text);
            dispatch(action);
        },
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
