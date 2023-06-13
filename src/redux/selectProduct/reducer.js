import {
  FETCH_SINGLE_PRODUCT_REQUEST,
  FETCH_SINGLE_PRODUCT_SUCCESS,
  FETCH_SINGLE_PRODUCT_ERROR
} from './actionTypes';
import {EDIT_COMMENT_ERROR, EDIT_COMMENT_REQUEST, EDIT_COMMENT_SUCCESS} from "../comments/actionTypes";

const initialState = {
  getProduct: [],
  comments: [],
  editProduct: []
};

/*View product reducer*/
export const SingleProductReducer = (state = initialState, { type, payload }) => {
  console.log('payload for single product reducer', payload)
  switch (type) {
    case FETCH_SINGLE_PRODUCT_REQUEST:
      return {
        ...state,
      }

    case FETCH_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        getProduct: payload.data,
        comments: payload.data
      }

    case FETCH_SINGLE_PRODUCT_ERROR:
      return {
        ...state,
      }

    default:
      return state;
  }
};

/*Edit product reducer*/
export const EditProductReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case EDIT_COMMENT_REQUEST:
      return {
        ...state,
      }

    case EDIT_COMMENT_SUCCESS:
      return {
        ...state,
        editProduct: payload.data
      }

    case EDIT_COMMENT_ERROR:
      return {
        ...state,
      }

    default:
      return state
  }
};
