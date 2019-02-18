import React from 'react';
import Post from '../presentational/Post';

const Category = (props) => {
  return (
    <div>
      {props.posts && props.posts.map(post => <Post key={post.id} post={post}></Post>)}
    </div>
  )
}

export default Category;