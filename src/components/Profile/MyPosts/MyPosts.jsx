import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElement = props.postsData.map((el) => <Post message={el.message} likesCount={el.likesCount}/>)

    let addPost = () => {
        let text = newPostElement.current.value;
        // alert(text);
        props.addPost(text);
    }

    let newPostElement = React.createRef();
    
    return (

        <div className={classes.myPosts}>
            <h3>MY POSTS</h3>
            <div>
                <div><textarea ref={newPostElement}></textarea></div>
                <div><button onClick={ addPost }>Add post</button></div>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>

    )
}

export default MyPosts;