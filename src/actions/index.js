export const ADD_POSTS = "ADD_POSTS";
export const PLUS_LIKE = "PLUS_LIKE";
export const PLUS_RETWEET = "PLUS_RETWEET";
export const CREATE_COMMENT = "CREATE_COMMENT";
export const ADD_COMMENT = "ADD_COMMENT";
export const PLUS_COMMENT_LIKE = "PLUS_COMMENT_LIKE";
export const PLUS_COMMENT_RETWEET = "PLUS_COMMENT_RETWEET";

let id = 0;
export const addPosts = (text) => {
  return {
    type: ADD_POSTS,
    id: id++,
    text
  };
};

export const plusLike = (id, like) => {
  return {
    type: PLUS_LIKE,
    id,
    like
  };
};

export const plusRetweet = (id, retweet) => {
  return {
    type: PLUS_RETWEET,
    id,
    retweet
  };
};

export const createComment = (id, isComment) => {
  return {
    type: CREATE_COMMENT,
    id,
    isComment
  };
};

export const addComment = (id, commentText, commentId, isComment) => {
  return {
    type: ADD_COMMENT,
    id,
    commentText,
    commentId,
    isComment
  };
};

export const plusCommentLike = (id, commentId, commentLike) => {
  return {
    type: PLUS_COMMENT_LIKE,
    id,
    commentId,
    commentLike
  };
};

export const plusCommentRetweet = (id, commentId, commentRetweet) => {
  return {
    type: PLUS_COMMENT_RETWEET,
    id,
    commentId,
    commentRetweet
  };
};
