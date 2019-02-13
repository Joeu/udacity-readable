import { connect } from 'react-redux';
import Post from '../presentational/Post';

const mapStateToProps = state => {
  return state;
}

const PostContainer = connect(mapStateToProps)(Post);

export default PostContainer;