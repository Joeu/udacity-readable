import { connect } from 'react-redux';
import Category from './Category';

const mapStateToProps = state => {
  return state;
}

const CategoryContainer = connect(mapStateToProps)(Category);

export default CategoryContainer;