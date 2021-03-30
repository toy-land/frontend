import * as toyApi from '@utils/toyApi';
import { createPromiseThunk } from '@utils/asyncUtils';
import * as actions from './actions';

export const writeToyThunk = createPromiseThunk(
  actions.writeToyAsyncAction.index,
  toyApi.postToyApi,
);
