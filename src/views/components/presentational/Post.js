import React from 'react';
import '../../styles/Post.css';
import TextContentContainer from '../container/TextContentContainer';
import Comment from './Comment';

const Post = (props) => {
  const toggleComments = () => {
    props.toggleComments();
  }

  return (
    <div className='post-container'>
      <TextContentContainer post={props.post}></TextContentContainer>
      {props.comments.length > 0 && <button onClick={() => toggleComments()}>Display Comments - total: {props.comments.length}</button>}
      {props.displayComments && props.comments && props.comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)}
    </div>
  )
}

export default Post;