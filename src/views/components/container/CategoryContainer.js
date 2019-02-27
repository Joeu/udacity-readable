import React, { Component } from 'react';
import { connect } from 'react-redux';
import Category from '../presentational/Category';
import { fetchCategoryPosts } from '../../../state/ducks/category/actions';

class CategoryContainer extends Component {
  state = {
    active: false
  }

  toggleNewTextContent = () => {
    this.setState(() => ({
      active: !this.state.active
    }));
  }

  render() {
    return (
      <Category posts={this.props.posts} category={this.props.category} active={this.state.active} toggleNewTextContent={this.toggleNewTextContent}></Category>
    )
  }
} 

const filterPosts = (posts, category) => {
  return posts.filter(post => post.category === category)
}

const mapStateToProps = (state, ownProps) => ({
  category: ownProps.location.pathname.split('/')[1],
  posts: state.posts.postsReducer.posts && filterPosts(state.posts.postsReducer.posts, ownProps.location.pathname.split('/')[1])
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchCategoryPosts: () => dispatch(fetchCategoryPosts(ownProps.location.pathname))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);