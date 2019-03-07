import React from 'react';
import { Media } from 'react-bootstrap';
import avatar from '../../images/avatar-placeholder.png';
import TextFormContainer from '../container/TextFormContainer';
import { NavLink } from "react-router-dom";
import * as helper from '../../../state/utils/helpers';
import * as constants from '../../utils/textConstants';

const TextContent = (props) => {
  console.log("CATEGORY");
  console.log(props.post.category);
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

  const toggleNewTextContent = (type) => {
    props.toggleNewTextContent(type);
  }

  const toggleEditTextContent = (type) => {
    props.toggleEditTextContent(type);
  }

  return (
    <div>
      <Media as='li'>
        <img className='avatar' alt='photo64x64' src={props.post.avatar ? props.post.avatar : avatar}></img>
        <Media.Body>
          {/* TEXT INFORMATION */}
          <h5>{props.post.title}</h5>
          <p>{props.post.body}</p>
          <div><span><b>{props.post.author}</b></span></div>
          <div><span>created: {helper.formatDate(props.post.timestamp)}</span></div>
          
          {/* TEXT CONTROLLERS */}
          <div className='post-button-control'>
            {/* VOTES */}
            <span className='btn'>{props.post.voteScore}</span>
            {/* VOTE UP */}
            <button className='btn' 
              onClick={() => handleVoteUpdate({ option: 'upVote' })}>
              <i className='fas fa-thumbs-up'></i>
            </button>
            {/* VOTE DOWN */}
            <button className='btn' 
              onClick={() => handleVoteUpdate({ option: 'downVote' })}>
              <i className='fas fa-thumbs-down'></i>
            </button>
            {props.post.category // If the text is a Post
              && <div>
                  {/* ADD COMMENT */}
                  <button className='btn' 
                    onClick={() => toggleNewTextContent(constants.TEXT_TYPE_COMMENT)}>
                    <i className='fa fa-comment'></i>
                  </button>
                  {/* POST DETAILS */}
                  <NavLink to={`${props.post.category}/posts/${props.post.id}`}>
                    <button className='btn'>
                      <i className="fas fa-info-circle"></i>
                    </button>
                  </NavLink>
                </div> 
            }
            {/* EDIT TEXT */}
            <button className='btn' 
              onClick={() => toggleEditTextContent(props.post.category 
                                                    ? constants.TEXT_TYPE_POST
                                                    : constants.TEXT_TYPE_COMMENT)}>
              <i className='fa fa-edit'></i>
            </button>
            {/* DELETE TEXT */}
            <button className='btn' 
              onClick={() => handleDelete(props.post.id)}>
              <i className='fa fa-trash'></i>
            </button>
          </div>
        </Media.Body>
      </Media>
      {props.active 
        && <TextFormContainer 
              deactivateForm={props.deactivateForm}
              type={props.type}
              isPost={props.post.category ? true : false} 
              edit={props.edit} 
              post={props.post} 
              parentId={props.type === constants.TEXT_TYPE_POST 
                          ? null 
                          : props.post.id}>
          </TextFormContainer>
      }
    </div>
  )
}

export default TextContent;