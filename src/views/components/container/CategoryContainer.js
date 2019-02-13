import { connect } from 'react-redux';
import Category from '../presentational/Category';
import { fetchCategoryPosts } from '../../../state/ducks/category/actions';

const mapStateToProps = (state, ownProps) => ({
  state,
  ownProps
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  teste: () => dispatch(fetchCategoryPosts(ownProps.location.pathname))
});

const CategoryContainer = connect(mapStateToProps, mapDispatchToProps)(Category);

export default CategoryContainer;