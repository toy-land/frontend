import * as toyApi from '@utils/toyApi';
import { createPromiseThunk } from '@utils/asyncUtils';
import { writeToyAsyncAction } from './actions';

export const writeToyThunk = createPromiseThunk(
  writeToyAsyncAction,
  toyApi.postToyApi,
);
