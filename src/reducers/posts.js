import {
  ADD_POSTS,
  PLUS_LIKE,
  PLUS_RETWEET,
  CREATE_COMMENT,
  ADD_COMMENT,
  PLUS_COMMENT_LIKE,
  PLUS_COMMENT_RETWEET
} from "../actions";

const initialState = {};
const posts = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POSTS:
      return {
        ...state,
        [action.id]: {
          id: action.id,
          text: action.text,
          like: 0,
          retweet: 0,
          isComment: false,
          comment: {}
        }
      };
    case PLUS_LIKE:
      const likedPost = state[action.id];
      const updateLike = action.like === 0 ? 1 : 0;
      return {
        ...state,
        [action.id]: {
          ...likedPost,
          like: updateLike
        }
      };
    case PLUS_RETWEET:
      const retweetedPost = state[action.id];
      const updateRetweet = action.retweet === 0 ? 1 : 0;
      return {
        ...state,
        [action.id]: {
          ...retweetedPost,
          retweet: updateRetweet
        }
      };
    case CREATE_COMMENT:
      const selectedPost = state[action.id];
      const updateIsComment = !action.isComment;
      return {
        ...state,
        [action.id]: {
          ...selectedPost,
          isComment: updateIsComment
        }
      };
    case ADD_COMMENT:
      const commentedPost = state[action.id];
      const comments = state[action.id].comment;
      return {
        ...state,
        [action.id]: {
          ...commentedPost,
          comment: {
            ...comments,
            [action.commentId]: {
              commentId: action.commentId,
              commentText: action.commentText,
              commentLike: 0,
              commentRetweet: 0
            }
          },
          isComment: !action.isComment
        }
      };
    case PLUS_COMMENT_LIKE:
      const commentPost = state[action.id];
      const commentsList = state[action.id].comment;
      const likedComment = commentsList[action.commentId];
      const updateCommentLike = action.commentLike === 0 ? 1 : 0;
      return {
        ...state,
        [action.id]: {
          ...commentPost,
          comment: {
            ...commentsList,
            [action.commentId]: {
              ...likedComment,
              commentLike: updateCommentLike
            }
          }
        }
      };
    case PLUS_COMMENT_RETWEET:
      const commentRetweetPost = state[action.id];
      const anotherComments = state[action.id].comment;
      const retweetedComment = anotherComments[action.commentId];
      const updateCommentRetweet = action.commentRetweet === 0 ? 1 : 0;
      return {
        ...state,
        [action.id]: {
          ...commentRetweetPost,
          comment: {
            ...anotherComments,
            [action.commentId]: {
              ...retweetedComment,
              commentRetweet: updateCommentRetweet
            }
          }
        }
      };
    default:
      return state;
  }
};

export default posts;
