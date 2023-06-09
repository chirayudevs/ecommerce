import {
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR
} from './actionTypes';

const initialState = {
  addProduct: []
};

export const AddProductReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case ADD_PRODUCT_REQUEST:
      return {
        ...state
      }

    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        addProduct: payload.data
      }

    case ADD_PRODUCT_ERROR:
      return {
        state
      }

    default:
      return state
  }
};
