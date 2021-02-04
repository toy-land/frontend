import * as api from '@utils/api';
import { createPromiseThunk } from '@utils/asyncUtils';
import * as actions from './actions';

export const getToyThunk = createPromiseThunk(actions.GET_TOY, api.getToyApi);
export const getToysThunk = createPromiseThunk(
  actions.GET_TOYS,
  api.getToysApi,
);
