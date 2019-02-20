import React from 'react';
import { Media } from 'react-bootstrap';
import avatar from '../../images/avatar-placeholder.png'

const Comment = (props) => {
  const handleVoteUpdate = (option) =>{
    props.post.category 
      ? props.updatePostVoteScore(props.post, option)
      : props.updateCommentVoteScore(props.post, option);
  }

  return (
    <div>
      <Media as='li'>
          <img className='avatar' alt='photo64x64' src={props.post.avatar ? props.post.avatar : avatar}></img>
          <Media.Body>
            <h5>{props.post.title}</h5>
            <p>{props.post.body}</p>
            <div><span><b>{props.post.author}</b></span></div>
            <div className='post-button-control'>
              <span className='btn'>{props.post.voteScore}</span>
              <button className='btn' onClick={() => handleVoteUpdate({option: 'upVote'})}><i className='fas fa-thumbs-up'></i></button>
              <button className='btn' onClick={() => handleVoteUpdate({option: 'downVote'})}><i className='fas fa-thumbs-down'></i></button>
              {props.post.category && <button className='btn'><i className='fa fa-comment'></i></button>}
              <button className='btn'><i className='fa fa-edit'></i></button>
              <button className='btn'><i className='fa fa-trash'></i></button>
            </div>
          </Media.Body>
        </Media>
    </div>
  )
}

export default Comment;