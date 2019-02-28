import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PostContainer } from '..';
import NoText from '../presentational/NoText';

class PostDetailsContainer extends Component {
  render() {
    return (
      <div>
        POST DETAILS
        {this.props.post && this.props.post
          ? <PostContainer key={this.props.post.id} post={this.props.post} ></PostContainer>
          : <NoText />
        }
      </div>
    )
  }
}

const filterPost = (reducer, postId) => {
  if (reducer && reducer.postsReducer && reducer.postsReducer.posts) {
    return reducer.postsReducer.posts.filter(post => post.id === postId)[0];
  }
}

const mapStateToProps = (state, ownProps) => ({
  state,
  post: filterPost(state.posts, ownProps.location.pathname.split('/')[2])
});

export default connect(mapStateToProps)(PostDetailsContainer);