import React from 'react';
import PostContainer from '../container/PostContainer';
import TextFormContainer from '../container/TextFormContainer';
import NoText from './NoText';
import { Button } from 'react-bootstrap';
import '../../styles/Category.css';

const Category = (props) => {
  const toggleNewTextContent = () => {
    props.toggleNewTextContent();
  }

  if (props.posts && props.posts.length > 0) {
    return (
      <div>
        <div>
          {props.posts.map(post => <PostContainer key={post.id} post={post}></PostContainer>)}
        </div>
        <Button className='float-add-button' onClick={() => toggleNewTextContent()} variant='dark'>+</Button>
        {props.active
          && <TextFormContainer></TextFormContainer>}
      </div>
    )
  } else {
    return (
      <div>
        <NoText />
        <Button className='float-add-button' variant='dark'>+</Button>
      </div>
    )
  }
}

export default Category;