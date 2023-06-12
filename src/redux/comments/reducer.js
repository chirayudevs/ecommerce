import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERROR,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS, ADD_COMMENT_ERROR
} from "./actionTypes";

const initialState = {
  allComments:  [],
  addComment: []
};

/*Get all comments*/

export const CommentReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case FETCH_COMMENTS_REQUEST:
      return {
        ...state,
      };

    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        allComments: payload.data
      }

    case FETCH_COMMENTS_ERROR:
      return {
        ...state
      }

    default: {
      return state;
    }
  }
};

/*Add comment*/

export const AddCommentReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
      }

    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addComment: payload.data
      }

    case ADD_COMMENT_ERROR:
      return {
        ...state,
      }

    default:
      return state
  }
};
