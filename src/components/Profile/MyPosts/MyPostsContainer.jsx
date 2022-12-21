import React from "react";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import { updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

// let addPostActionCreator = () => {
//   return {
//     type: 'ADD-POST'
//   }
// }

// let updateNewPostTextActionCreator = (text) => {
//   return {
//     type: 'UPDATE-NEW-POST-TEXT',
//     newText: text
//   }
// }

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <StoreContext.Consumer> {
      (store) => (
           <MyPosts
        updateNewPostsText={onPostChange}
        addPost={addPost}
        postsData={state.profilePage.postsData}
        newPostText={state.profilePage.newPostText}
      />)
      }
      
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
