import React from 'react';
import PostContainer from './PostContainer';

const Category = (props) => {
  return (
    <div>
      Thats a Category component, which displays Posts
      <PostContainer></PostContainer>
      <PostContainer></PostContainer>
    </div>
  )
}

export default Category;