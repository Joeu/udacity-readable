import React from 'react';
import PostContainer from '../container/PostContainer';

const Home = (props) => {
  return (
    <div>
      {props.posts && props.posts.map(post => <PostContainer key={post.id} post={post}></PostContainer>)}
    </div>
  )
}

export default Home;