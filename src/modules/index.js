import { combineReducers } from 'redux';
import getToy from './getToy';
import writeToy from './writeToy';
import updateToy from './updateToy';
import removeToy from './removeToy';
import dragToy from './dragToy';

const rootReducer = combineReducers({
  getToy, writeToy, updateToy, removeToy, dragToy,
});

export default rootReducer;
