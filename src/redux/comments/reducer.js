import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERROR,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_ERROR,
  EDIT_COMMENT_REQUEST,
  EDIT_COMMENT_SUCCESS,
  EDIT_COMMENT_ERROR,
  DELETE_COMMENT_REQUEST, DELETE_COMMENT_SUCCESS, DELETE_COMMENT_ERROR
} from "./actionTypes";

const initialState = {
  allComments:  [],
  addComment: [],
  editComment: [],
  deleteComment: []
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

/*Edit comment*/

export const EditCommentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case EDIT_COMMENT_REQUEST:
      return {
        ...state,
      }

    case EDIT_COMMENT_SUCCESS:
      return {
        ...state,
        editComment: payload.data
      }

    case EDIT_COMMENT_ERROR:
      return {
        ...state,
      }

    default:
      return state
  }
};

/*Delete comment*/

export const DeleteCommentReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case DELETE_COMMENT_REQUEST:
      return {
        ...state,
      }

    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        deleteComment: payload.data
      }

    case DELETE_COMMENT_ERROR:
      return {
        ...state
      }

    default:
      return state
  }
}
