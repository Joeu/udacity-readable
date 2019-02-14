import React, { Component } from 'react';
import { connect } from 'react-redux';
import Category from '../presentational/Category';
import { fetchCategoryPosts } from '../../../state/ducks/category/actions';

class CategoryContainer extends Component {
  componentDidMount() {
    this.props.fetchCategoryPosts(this.props.location.pathname);
  }

  render() {
    return (
      <Category posts={this.props.categoryPosts}></Category>
    )
  }
} 

const mapStateToProps = (state) => ({
  categoryPosts: state.categories.categoryReducer.posts
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchCategoryPosts: () => dispatch(fetchCategoryPosts(ownProps.location.pathname))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);