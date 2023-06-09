import { Post } from '../../services/baseServices';
import {
  VERIFY_EMAIL_REQUEST,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_ERROR,
  RESEND_EMAIL_REQUEST,
  RESEND_EMAIL_SUCCESS,
  RESEND_EMAIL_ERROR
} from './actionTypes';

export const VerifyEmailAction = (params) => {
  console.log('fetch user action', params);

  return async (dispatch) => {

    dispatch({type: VERIFY_EMAIL_REQUEST});

    console.log('test')
    await Post('auth/verify-email', params).then((response) =>
      dispatch({
        type: VERIFY_EMAIL_SUCCESS,
        payload: response,
      })
    ).catch((error) =>
      console.error({error})
    )
  }
};

export const ResendEmailAction = (params) => {
  return async (dispatch) => {
    dispatch({type: RESEND_EMAIL_REQUEST});

    await Post('auth/resendOTP', params).then((response) =>
      dispatch({
        type: RESEND_EMAIL_SUCCESS,
        payload: response,
      })
    ).catch((error) => {
      console.error({error})
    })
  }
};
