import { combineReducers } from 'redux';
import getGithub from '@modules/getGithub';
import getToy from '@modules/getToy';
import writeToy from '@modules/writeToy';
import updateToy from '@modules/updateToy';
import removeToy from '@modules/removeToy';
import dragToy from '@modules/dragToy';
import getOption from '@modules/getOption';

const rootReducer = combineReducers({
  getToy, writeToy, updateToy, removeToy, dragToy, getGithub, getOption,
});

export default rootReducer;
