import React, { Component } from "react";
import { connect } from "react-redux";
import {
  plusLike,
  plusRetweet,
  createComment,
  addComment,
  plusCommentLike,
  plusCommentRetweet
} from "../actions";

class Post extends Component {
  state = { commentText: "" };

  handleChange = (event) => this.setState({ commentText: event.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ commentText: "" });
  };

  render() {
    const {
      post,
      onClickLike,
      onClickRetweet,
      onClickComment,
      onSubmitComment,
      onClickCommentLike,
      onClickCommentRetweet
    } = this.props;
    const isComment = !!post.isComment;
    return (
      <div>
        <span>{post.text}</span>
        <button
          onClick={() => {
            onClickComment(post.id, post.isComment);
          }}
        >
          comment
        </button>
        <button
          onClick={() => {
            onClickLike(post.id, post.like);
          }}
        >
          like
        </button>
        <span> like: {post.like} </span>
        <button
          onClick={() => {
            onClickRetweet(post.id, post.retweet);
          }}
        >
          retweet
        </button>
        <span> retweet: {post.retweet} </span>
        {isComment && (
          <form
            onSubmit={(e) => {
              const commentText = this.state.commentText;
              const commentId = Object.values(post.comment).length + 1;
              onSubmitComment(post.id, commentText, commentId, post.isComment);
              this.handleSubmit(e);
            }}
          >
            <input
              type="text"
              value={this.state.commentText}
              onChange={this.handleChange}
            />
            <input type="submit" value="submit" />
          </form>
        )}
        {Object.values(post.comment).map((comment) => (
          <div key={comment.commentId}>
            {comment.commentText}
            <button
              onClick={() => {
                onClickCommentLike(
                  post.id,
                  comment.commentId,
                  comment.commentLike
                );
              }}
            >
              like
            </button>
            <span> like: {comment.commentLike} </span>
            <button
              onClick={() => {
                onClickCommentRetweet(
                  post.id,
                  comment.commentId,
                  comment.commentRetweet
                );
              }}
            >
              retweet
            </button>
            <span> retweet: {comment.commentRetweet}</span>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ posts: state.posts });

const mapDispatchToProps = (dispatch) => {
  return {
    onClickLike: (id, like) => dispatch(plusLike(id, like)),
    onClickRetweet: (id, retweet) => dispatch(plusRetweet(id, retweet)),
    onClickComment: (id, isComment) => dispatch(createComment(id, isComment)),
    onSubmitComment: (id, commentText, commentId, isComment) =>
      dispatch(addComment(id, commentText, commentId, isComment)),
    onClickCommentLike: (id, commentId, commentLike) =>
      dispatch(plusCommentLike(id, commentId, commentLike)),
    onClickCommentRetweet: (id, commentId, commentRetweet) =>
      dispatch(plusCommentRetweet(id, commentId, commentRetweet))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
