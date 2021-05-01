import * as toyApi from '@utils/toyApi';
import { createPromiseThunk } from '@utils/asyncUtils';
import { getToyAsyncAction, getToysAsyncAction } from './actions';

export const getToyThunk = createPromiseThunk(getToyAsyncAction, toyApi.getToyApi);
export const getToysThunk = createPromiseThunk(
  getToysAsyncAction,
  toyApi.getToysApi,
);
