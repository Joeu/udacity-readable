import React from 'react';
import '../../styles/Post.css';
import Comment from './Comment';

const Post = (props) => {
  if (props.post) {
    return (
      <div className='post-container'>
        <Comment post={props.post}></Comment>
        <div className='post-button-control'>
          <button class="btn"><i class="fa fa-comment"></i></button>
          <button class="btn"><i class="fa fa-edit"></i></button>
          <button class="btn"><i class="fa fa-trash"></i></button>
        </div>
      </div>
    )
  } else {
    return (<div>NO POSTS</div>)
  }
}

export default Post;