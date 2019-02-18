import React from 'react';
import { Media } from 'react-bootstrap';
import avatar from '../../images/avatar-placeholder.png'

const Comment = (props) => {
  return (
    <div>
      <Media as='li'>
          <img className='avatar' alt='photo64x64' src={props.post.avatar ? props.post.avatar : avatar}></img>
          <Media.Body>
            <h5>{props.post.title}</h5>
            <p>{props.post.body}</p>
            <div><span><b>{props.post.author}</b></span></div>
            <div className='post-button-control'>
              <button className="btn"><i className="fas fa-thumbs-up"></i></button>
              <button className="btn"><i className="fas fa-thumbs-down"></i></button>
              <button className="btn"><i className="fa fa-comment"></i></button>
              <button className="btn"><i className="fa fa-edit"></i></button>
              <button className="btn"><i className="fa fa-trash"></i></button>
            </div>
          </Media.Body>
        </Media>
    </div>
  )
}

export default Comment;