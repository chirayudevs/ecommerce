import { FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_ERROR } from "./actionTypes";

const initialState = {
  allComments:  []
};

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
