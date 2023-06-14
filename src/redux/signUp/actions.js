import { Post } from '../../services/baseServices';
import { REGISTER_USER_DATA_REQUEST, REGISTER_USER_DATA_SUCCESS, REGISTER_USER_DATA_ERROR } from './actionTypes';

export const FetchUser = (params) => {

  return async (dispatch) => {

    dispatch({type: REGISTER_USER_DATA_REQUEST});

    console.log('test')
    await Post('auth/signup', params).then((response) =>
      dispatch({
        type: REGISTER_USER_DATA_SUCCESS,
        payload: response,
      })
    ).catch((error) =>
      console.error({error})
    )
  }
};
