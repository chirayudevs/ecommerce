import { FETCH_ORDERS_REQUEST, FETCH_ORDERS_SUCCESS } from './actionTypes';
import { Get } from '../../services/baseServices';

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': JSON.parse(localStorage.getItem('user')),
  }
};

export const FetchOrdersRequest = () => {
  return async (dispatch) => {
    dispatch({type: FETCH_ORDERS_REQUEST});

    await Get('order?skip=0&limit=2', config).then((response) =>
      dispatch({
        type: FETCH_ORDERS_SUCCESS,
        payload: response.data
      })
    )
  }
};
