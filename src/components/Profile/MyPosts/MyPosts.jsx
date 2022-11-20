import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


let addPostActionCreator = () => {
  return {
    type: 'ADD-POST'
  }
}

let updateNewPostTextActionCreator = (text) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT', 
    newText: text
  }
}

const MyPosts = (props) => {
  let postsElement = props.postsData.map((el) => (
    <Post message={el.message} likesCount={el.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    // props.addPost();
    props.dispatch(addPostActionCreator());
  };


  let onPostChange = () => {
    let text = newPostElement.current.value;
    // props.updateNewPostText(text);
    // let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
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
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
