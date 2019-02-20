import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../presentational/Home';

class HomeContainer extends Component {
  render() {
    return (
      <Home posts={this.props.posts}></Home>
    )
  }
} 

const mapStateToProps = (state) => ({
  posts: state.posts.postsReducer.posts
});

export default connect(mapStateToProps)(HomeContainer);