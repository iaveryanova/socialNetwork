import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElement = props.postsData.map((el) => (
    <Post message={el.message} likesCount={el.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };


  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
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
