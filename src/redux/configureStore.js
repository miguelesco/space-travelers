/* eslint-disable linebreak-style */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketReducer from './rockets/rockets';
import missionsReducer from './missions/missions';

const reducer = combineReducers({
  missionsReducer,
  rocketReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
