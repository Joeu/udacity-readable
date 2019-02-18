import React from 'react';
import Post from './Post';

const Home = (props) => {

  console.log("HOME", props);

  return (
    <div>
      {props.posts && props.posts.map(post => <Post key={post.id} post={post}></Post>)}
    </div>
  )
}

export default Home;