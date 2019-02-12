import { connect } from 'react-redux';
import Post from './Post';

const mapStateToProps = state => {
  return state;
}

const PostContainer = connect(mapStateToProps)(Post);

export default PostContainer;