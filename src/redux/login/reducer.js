import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './actionTypes';

const initialState = {
  login: []
};

export const LogInReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case LOGIN_REQUEST:
      return {
        ...state
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        login: payload.data
      };

    case LOGIN_ERROR:
      return {
        ...state
      }

    default:
      return state;
  }
};
