import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../presentational/Home';
import { fetchAllPosts } from '../../../state/ducks/post/actions';

class HomeContainer extends Component {
  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render() {
    return (
      <Home posts={this.props.posts}></Home>
    )
  }
} 

const mapStateToProps = (state) => ({
  posts: state.posts.posts
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllPosts: () => dispatch(fetchAllPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);