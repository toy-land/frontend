import * as api from '../../utils/api';
import * as actions from './actions';
import { createPromiseThunk } from '../../utils/asyncUtils';

export const getToyThunk = createPromiseThunk(actions.GET_TOY, api.getToyApi);
export const getToysThunk = createPromiseThunk(
  actions.GET_TOYS,
  api.getToysApi,
);
