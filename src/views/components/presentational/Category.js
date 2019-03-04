import React from 'react';
import PostContainer from '../container/PostContainer';
import TextFormContainer from '../container/TextFormContainer';
import NoText from './NoText';
import { Button } from 'react-bootstrap';
import '../../styles/Category.css';
import * as constants from '../../utils/textConstants';

const Category = (props) => {
  const toggleNewTextContent = () => {
    props.toggleNewTextContent();
  }

  return (
    <div>
    {props.posts && props.posts.length > 0
    ? <div>
        <div>
          {props.posts.map(post => <PostContainer key={post.id} post={post}></PostContainer>)}
        </div>
      </div>
    : <div>
        <NoText />
      </div>
    }
    <Button className='float-add-button' onClick={() => toggleNewTextContent()} variant='dark'>+</Button>
    {props.active
      && <TextFormContainer 
          category={props.category} 
          type={constants.TEXT_TYPE_POST} 
          isPost={true}
          deactivateForm={props.deactivateForm}
         >
        </TextFormContainer>}
    </div>
  )
}

export default Category;