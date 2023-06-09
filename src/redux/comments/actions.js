import { FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_ERROR } from './actionTypes';
import { Get } from '../../services/baseServices';

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': JSON.parse(localStorage.getItem('user')),
  }
};

export const CommentsRequest = () => {

  return async (dispatch) => {
    dispatch({type: FETCH_COMMENTS_REQUEST});

    await Get('comment', config).then((response) =>
      dispatch({
        type: FETCH_COMMENTS_SUCCESS,
        payload: response.data
      })
    )
  }
};
