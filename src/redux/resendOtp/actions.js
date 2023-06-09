import { RESEND_OTP_REQUEST, RESEND_OTP_SUCCESS, RESEND_OTP_ERROR } from './actionTypes';
import {Post} from "../../services/baseServices";

export const ResetOtpAction = () => {
  return async (dispatch) => {
    dispatch({ type: RESEND_OTP_REQUEST });

    await Post('resendOTP').then((response) =>
      dispatch({
        type: RESEND_OTP_SUCCESS,
        payload: response,
      })
    ).catch((error) =>
    console.error(error));
  }
};
