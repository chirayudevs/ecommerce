import {
  ADD_ORDER_TO_CART_REQUEST,
  ADD_ORDER_TO_CART_SUCCESS,
  FETCH_ORDERS_REQUEST,
  FETCH_ORDERS_SUCCESS
} from './actionTypes';
import { Get, Post } from '../../services/baseServices';

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': JSON.parse(localStorage.getItem('user')),
  }
};

export const FetchOrdersRequest = () => {
  return async (dispatch) => {
    dispatch({type: FETCH_ORDERS_REQUEST});

    await Get('order?skip=0&limit=5', config).then((response) =>
      dispatch({
        type: FETCH_ORDERS_SUCCESS,
        payload: response.data
      })
    )
  }
};

export const AddOrderToCartRequest = (params) => {
  return async (dispatch) => {
    dispatch({type: ADD_ORDER_TO_CART_REQUEST});

    await Post('order', params, config).then((response) =>
      dispatch({
        type: ADD_ORDER_TO_CART_SUCCESS,
        payload: response.data
      })
    )
  }
};
