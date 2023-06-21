import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './actionTypes';
import { Post } from '../../services/baseServices';

const config = {
  headers: {
    'Content-Type': 'application/json',
    //'Authorization': localStorage.getItem('user'),
  }
};

export const LoginRequest = (params) => {
  return async (dispatch) => {

    dispatch({type:LOGIN_REQUEST});

    await Post('auth/login', params, config).then((response) => {
      const { data } = response.data
      localStorage.setItem('user', JSON.stringify(data.accessToken.accessToken))
      localStorage.setItem('refreshToken', JSON.stringify(data.refreshToken.refreshtoken))
      console.log('token', data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response,
      })
    }).catch((error) => {
      console.error({error})
    })
  }
};
