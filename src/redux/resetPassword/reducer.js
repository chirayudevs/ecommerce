import { RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_ERROR } from './actionTypes';

const initialState = {
  email: []
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
