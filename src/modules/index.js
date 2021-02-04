import { combineReducers } from 'redux';
import getToy from './getToy';
import writeToy from './writeToy';
import updateToy from './updateToy';
import removeToy from './removeToy';
import getGithub from './getGitHub';

const rootReducer = combineReducers({
  getToy, writeToy, updateToy, removeToy, getGithub,
});

export default rootReducer;
