import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PostContainer } from '..';
import '../../styles/Post.css';
import NoText from '../presentational/NoText';

class PostDetailsContainer extends Component {
  render() {
    return (
      <div>
        {this.props.post && this.props.post
          ? <div>
              <h4 className='post-details-title'>Category - {this.props.post.category}</h4>
              <PostContainer 
                key={this.props.post.id} 
                post={this.props.post}>
              </PostContainer>
            </div>
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