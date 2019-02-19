import React from 'react';
import PostContainer from '../container/PostContainer';
import NoText from './NoText';

const Category = (props) => {
  if (props.posts && props.posts.length > 0) {
    return (
      <div>
        {props.posts.map(post => <PostContainer key={post.id} post={post}></PostContainer>)}
      </div>
    )
  } else {
    return (
      <NoText></NoText>
    )
  }
}

export default Category;