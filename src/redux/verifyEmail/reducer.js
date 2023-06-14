import {
  VERIFY_EMAIL_REQUEST,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_ERROR,
  RESEND_EMAIL_REQUEST,
  RESEND_EMAIL_SUCCESS,
  RESEND_EMAIL_ERROR
} from './actionTypes';

const initialState = {
  data: [],
  resendData: []
};

export const VerifyEmailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case VERIFY_EMAIL_REQUEST:
      return {
        ...state,
        data: []
      }

    case VERIFY_EMAIL_SUCCESS:
      return {
        ...state,
        data: payload
      }

    case VERIFY_EMAIL_ERROR:
      return {
        ...state,
      }

    default:
      return state;
  }
};

export const ResendEmailReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case RESEND_EMAIL_REQUEST:
      return {
        ...state
      }

    case RESEND_EMAIL_SUCCESS:
      return {
        ...state,
        resendData: payload
      }

    case RESEND_EMAIL_ERROR:
      return {
        ...state
      }

    default:
      return state
  }
};
