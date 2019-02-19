import React from 'react';
import '../../styles/Post.css';
import TextContent from './TextContent';
// import CommentContainer from './CommentContainer';
import Comment from './Comment';

const Post = (props) => {
  if (props.post) {
    return (
      <div className='post-container'>
        <TextContent post={props.post}></TextContent>
        {props.comments && props.comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)}
      </div>
    )
  } else {
    return (<div>NO POSTS</div>)
  }
}

export default Post;