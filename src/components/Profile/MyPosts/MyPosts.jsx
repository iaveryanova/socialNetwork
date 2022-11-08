import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElement = props.postsData.map((el) => <Post message={el.message} likesCount={el.likesCount}/>)

    return (

        <div className={classes.myPosts}>
            <h3>MY POSTS</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>Add post</button></div>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>

    )
}

export default MyPosts;