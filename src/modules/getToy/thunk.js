import * as toyApi from '@utils/toyApi';
import { createPromiseThunk } from '@utils/asyncUtils';
import * as actions from './actions';

export const getToyThunk = createPromiseThunk(actions.getToyAsyncAction.index, toyApi.getToyApi);
export const getToysThunk = createPromiseThunk(
  actions.getToysAsyncAction.index,
  toyApi.getToysApi,
);
