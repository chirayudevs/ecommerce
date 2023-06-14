import {
  FETCH_SINGLE_PRODUCT_REQUEST,
  FETCH_SINGLE_PRODUCT_SUCCESS,
  FETCH_SINGLE_PRODUCT_ERROR,
  EDIT_PRODUCT_REQUEST, EDIT_PRODUCT_SUCCESS, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS
} from './actionTypes';
import {Delete, Get, Put} from '../../services/baseServices';

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
export const EditProductRequest = (_id, params) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': JSON.parse(localStorage.getItem('user'))
    }
  };

  return async (dispatch) => {
    dispatch({type: EDIT_PRODUCT_REQUEST});
    await Put(`product/${_id}`, params, config).then((response) =>
      dispatch({
        type: EDIT_PRODUCT_SUCCESS,
        payload: response.data
      })
    ).catch((error) =>
      console.log(error)
    )
  }
};

/*Delete product*/
export const DeleteProductRequest = (_id) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': JSON.parse(localStorage.getItem('user'))
    }
  };

  return async (dispatch) => {
    dispatch({type: DELETE_PRODUCT_REQUEST});
    await Delete(`product/${_id}`, config).then((response) =>
      dispatch({
        type: DELETE_PRODUCT_SUCCESS,
        payload: response.data
      })
    ).catch((error) =>
      console.log(error)
    )
  }
};
