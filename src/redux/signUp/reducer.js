import { REGISTER_USER_DATA_REQUEST, REGISTER_USER_DATA_SUCCESS, REGISTER_USER_DATA_ERROR } from './actionTypes';

const initialState = {
  user: []
};

export const SignUpReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER_DATA_REQUEST:
      return {
        ...state,
        data: []
      }

    case REGISTER_USER_DATA_SUCCESS:
      return {
        ...state,
        user: payload
      }

    case REGISTER_USER_DATA_ERROR:
      return {
        ...state,
      }

      default:
        return state;
  }
};
