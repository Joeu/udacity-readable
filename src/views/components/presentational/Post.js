import React from 'react';
import '../../styles/Post.css';

const Post = (props) => {

  console.log("POST", props);

  if (props.post){
    return (
      <article className='post-container'>
        <div><span>{props.post.title}</span></div>
        <div><span>{props.post.body}</span></div>
        <div><span>{props.post.author}</span></div>
      </article>
    )
  } else {
    return (<div>NO POSTS</div>)
  }
}

export default Post;