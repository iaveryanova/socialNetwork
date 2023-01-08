
import { addPostActionCreator } from "../../../redux/profile-reducer";
import { updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {  
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostsText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;


