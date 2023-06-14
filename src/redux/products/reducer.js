import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_REQUEST
} from './actionTypes';

const initialState = {
  products: [],
  loading: false,
  page: 1,
  limit: 10
};

export const ProductsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        products: [],
        loading: true
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: [...state.products, ...payload.data],
        loading: false
      };

    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        products: [],
        loading: false
      };

    default:
      return state;
  }
};
