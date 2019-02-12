import React from 'react';
import PostContainer from './PostContainer';

const Category = (props) => {
  console.log("CATEGORY PROPS", props);
  
  return (
    <div>
      Thats a Category component, which displays Posts
      <PostContainer></PostContainer>
    </div>
  )
}

export default Category;