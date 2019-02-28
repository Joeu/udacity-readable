import React from 'react';
import { Media } from 'react-bootstrap';
import avatar from '../../images/avatar-placeholder.png';
import TextFormContainer from '../container/TextFormContainer';
import { NavLink } from "react-router-dom";

const Comment = (props) => {
  const handleVoteUpdate = (option) => {
    props.post.category
      ? props.updatePostVoteScore(props.post, option)
      : props.updateCommentVoteScore(props.post, option);
  }

  const handleDelete = (id) => {
    props.post.category
      ? props.deletePost(id)
      : props.deleteComment(id);
  }

  const toggleNewTextContent = () => {
    props.toggleNewTextContent();
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
            <button className='btn' 
              onClick={() => handleVoteUpdate({ option: 'upVote' })}>
              <i className='fas fa-thumbs-up'></i>
            </button>
            <button className='btn' 
              onClick={() => handleVoteUpdate({ option: 'downVote' })}>
              <i className='fas fa-thumbs-down'></i>
            </button>
            {props.post.category 
              && <button className='btn' onClick={() => toggleNewTextContent()}>
                  <i className='fa fa-comment'></i>
                </button>
            }
            <button className='btn'><i className='fa fa-edit'></i></button>
            <NavLink to={`/posts/${props.post.id}`}>
              <button className='btn'>
                <i className="fas fa-info-circle"></i>
              </button>
            </NavLink>
            <button className='btn' 
              onClick={() => handleDelete(props.post.id)}>
              <i className='fa fa-trash'></i>
            </button>
          </div>
        </Media.Body>
      </Media>
      {props.active 
        && <TextFormContainer isPost={false} parentId={props.post.id}></TextFormContainer>
      }
    </div>
  )
}

export default Comment;