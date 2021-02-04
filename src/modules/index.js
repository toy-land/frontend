import { combineReducers } from 'redux';
import getToy from './getToy';
import writeToy from './writeToy';
import updateToy from './updateToy';
import removeToy from './removeToy';

const rootReducer = combineReducers({
  getToy, writeToy, updateToy, removeToy,
});

export default rootReducer;
