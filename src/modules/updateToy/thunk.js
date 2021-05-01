import * as toyApi from '@utils/toyApi';
import { createPromiseThunk } from '@utils/asyncUtils';
import * as actions from './actions';

export const updateToyThunk = createPromiseThunk(
  actions.UPDATE_TOY,
  toyApi.putToyApi,
);
