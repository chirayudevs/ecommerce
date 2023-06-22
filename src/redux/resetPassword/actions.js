import { RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, PASSWORD_CONFIRM_REQUEST, PASSWORD_CONFIRM_SUCCESS } from './actionTypes';
import { Post } from '../../services/baseServices';

export const ResetPasswordRequest = (params) => {
  return async (dispatch) => {
    dispatch({type: RESET_PASSWORD_REQUEST});

    await Post('auth/password/email', params).then((response) =>
      dispatch({
        type: RESET_PASSWORD_SUCCESS,
        payload: response,
      })
    ).catch((error) =>
      console.error(error));
  }
};

export const ResetPasswordConfirm = (params) => {
  return async (dispatch) => {
    dispatch({type: PASSWORD_CONFIRM_REQUEST});

    await Post('auth/password/confirm', params).then((response) =>
      dispatch({
        type: PASSWORD_CONFIRM_SUCCESS,
        payload: response,
      })
    ).catch((error) =>
      console.log(error)
    )
  }
};
