import { connect } from 'react-redux';
import Comment from './Comment';

const mapStateToProps = state => {
  return state;
}

const CommentContainer = connect(mapStateToProps)(Comment);

export default CommentContainer;