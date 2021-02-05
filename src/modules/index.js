import { combineReducers } from 'redux';
import getToy from './getToy';
import writeToy from './writeToy';
import updateToy from './updateToy';
import removeToy from './removeToy';
import getGithub from './getGithub';
import getSkills from './getSkills';

const rootReducer = combineReducers({
  getToy, writeToy, updateToy, removeToy, getGithub, getSkills,
});

export default rootReducer;
