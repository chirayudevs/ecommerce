import {
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR
} from './actionTypes';
import { Post } from '../../services/baseServices';

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': JSON.parse(localStorage.getItem('user')),
  }
};

export const AddProductAction = (params) => {
  return async (dispatch) => {
    dispatch({type: ADD_PRODUCT_REQUEST})

    await Post('product', params, config).then((response) =>
      dispatch({
        type: ADD_PRODUCT_SUCCESS,
        payload: response
      })
    ).catch((error) =>
      console.error({error})
    )
  }
};
