import { FETCH_ORDERS_REQUEST, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_ERROR } from './actionTypes';

const initialState = {
  orders: []
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
