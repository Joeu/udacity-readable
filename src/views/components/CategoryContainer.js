import { connect } from 'react-redux';
import Category from './Category';
import { fetchCategoryPosts } from '../../state/ducks/category/actions';

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  fetchCategoryPosts: () => dispatch(fetchCategoryPosts())
});

const CategoryContainer = connect(mapStateToProps, mapDispatchToProps)(Category);

export default CategoryContainer;