import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import { updateNewPostTextActionCreator } from "../../../redux/profile-reducer";

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

const MyPosts = (props) => {
  let postsElement = props.postsData.map((el) => (
    <Post message={el.message} likesCount={el.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };


  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostsText(text);
    
  };
  

  return (
    <div className={classes.myPosts}>
      <h3>MY POSTS</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElement}</div>
    </div>
  );
};

export default MyPosts;