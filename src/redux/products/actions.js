import { Get } from '../../services/baseServices';
import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from './actionTypes';

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': JSON.parse(localStorage.getItem('user')),
  }
};

export const FetchProducts = () => {
  return async (dispatch) => {

    dispatch({type: GET_PRODUCTS_REQUEST});

    await Get('product?skip=0&limit=20', config).then((response) =>
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: response.data
      })
    ).catch((error) =>
      console.log(error)
    )
  }
};
