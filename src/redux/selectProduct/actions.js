import { FETCH_SINGLE_PRODUCT_REQUEST, FETCH_SINGLE_PRODUCT_SUCCESS, FETCH_SINGLE_PRODUCT_ERROR } from './actionTypes';
import { Get } from '../../services/baseServices';

export const RequestProduct = (_id) => {

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': JSON.parse(localStorage.getItem('user'))
    }
  };

  return async (dispatch) => {
    dispatch({type: FETCH_SINGLE_PRODUCT_REQUEST});

    await Get(`product/${_id}/product`, config).then((response) =>
      dispatch({
        type: FETCH_SINGLE_PRODUCT_SUCCESS,
        payload: response.data
      },)
    ).catch((error) =>
      console.log(error)
    )
  }
};
