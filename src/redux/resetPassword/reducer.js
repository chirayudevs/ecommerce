import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  PASSWORD_CONFIRM_REQUEST, PASSWORD_CONFIRM_SUCCESS, PASSWORD_CONFIRM_ERROR
} from './actionTypes';

const initialState = {
  email: [],
  passwordConfirm: []
};

export const ResetPasswordReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
      }

    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        email: payload
      }

    case RESET_PASSWORD_ERROR:
      return {
        ...state
      }

    default:
      return state;
  }
};

/*Password confirm*/

export const PasswordConfirmReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PASSWORD_CONFIRM_REQUEST:
      return {
        ...state
      }

    case PASSWORD_CONFIRM_SUCCESS:
      return {
        ...state,
        passwordConfirm: payload
      }

    case PASSWORD_CONFIRM_ERROR:
      return {
        ...state
      }

    default:
      return state
  }
};
