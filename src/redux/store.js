import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Reducers } from './combineReducer';

export const configStore = createStore(
  Reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
