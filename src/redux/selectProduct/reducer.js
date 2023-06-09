import {
  FETCH_SINGLE_PRODUCT_REQUEST,
  FETCH_SINGLE_PRODUCT_SUCCESS,
  FETCH_SINGLE_PRODUCT_ERROR
} from './actionTypes';

const initialState = {
  getProduct: [],
  comments: []
};

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
