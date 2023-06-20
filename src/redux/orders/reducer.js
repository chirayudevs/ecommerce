import {
  FETCH_ORDERS_REQUEST,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_ERROR,
  ADD_ORDER_TO_CART_REQUEST,
  ADD_ORDER_TO_CART_SUCCESS, ADD_ORDER_TO_CART_ERROR
} from './actionTypes';

const initialState = {
  orders: [],
  AddOrder: []
};

export const OrdersReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_ORDERS_REQUEST:
      return {
        ...state
      }

    case FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orders: payload
      }

    case FETCH_ORDERS_ERROR:
      return {
        ...state
      }

    default:
      return state;
  }
};

export const AddToCartReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_ORDER_TO_CART_REQUEST:
      return {
        ...state
      }

    case ADD_ORDER_TO_CART_SUCCESS:
      return {
        ...state,
        addOrder: payload
      }

    case ADD_ORDER_TO_CART_ERROR:
      return {
        ...state
      }

    default:
      return state;
  }
};
