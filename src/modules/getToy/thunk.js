import * as toyApi from '@utils/toyApi';
import { createPromiseThunk } from '@utils/asyncUtils';
import { getMoreToysAsyncAction, getToyAsyncAction, getToysAsyncAction } from './actions';

export const getToyThunk = createPromiseThunk(getToyAsyncAction, toyApi.getToyApi);
export const getToysThunk = createPromiseThunk(
  getToysAsyncAction,
  toyApi.getToysApi,
);
export const getMoreToysThunk = createPromiseThunk(
  getMoreToysAsyncAction,
  toyApi.getToysApi,
);
