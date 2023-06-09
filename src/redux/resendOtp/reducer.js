import { RESEND_OTP_REQUEST, RESEND_OTP_SUCCESS, RESEND_OTP_ERROR } from './actionTypes';

const initialState = {
  otp: []
};

export const ResendOtpReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case RESEND_OTP_REQUEST:
      return {
        ...state,
      }

    case RESEND_OTP_SUCCESS:
      return {
        ...state,
        otp: payload
      }

    case RESEND_OTP_ERROR:
      return {
        ...state,
      }

    default:
      return state;
  }
};
