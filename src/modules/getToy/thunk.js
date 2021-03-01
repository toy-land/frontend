import * as api from '@utils/api';
import { createPromiseThunk } from '@utils/asyncUtils';
import * as actions from './actions';

export const getToyThunk = createPromiseThunk(actions.getToyAsyncAction.index, api.getToyApi);
export const getToysThunk = createPromiseThunk(
  actions.getToysAsyncAction.index,
  api.getToysApi,
);
