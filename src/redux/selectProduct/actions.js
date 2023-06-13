import {
  FETCH_SINGLE_PRODUCT_REQUEST,
  FETCH_SINGLE_PRODUCT_SUCCESS,
  FETCH_SINGLE_PRODUCT_ERROR,
  EDIT_PRODUCT_REQUEST, EDIT_PRODUCT_SUCCESS
} from './actionTypes';
import { Get, Put } from '../../services/baseServices';

/*View product*/
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

/*Edit product*/
export const EditProductRequest = () => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': JSON.parse(localStorage.getItem('user'))
    }
  };

  return async (dispatch) => {
    dispatch({type: EDIT_PRODUCT_REQUEST});

    await Put(`product/`, config).then((response) =>
      dispatch({
        type: EDIT_PRODUCT_SUCCESS,
        payload: response.data
      })
    ).catch((error) =>
      console.log(error)
    )
  }
};
