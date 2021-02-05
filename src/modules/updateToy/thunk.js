import * as api from '@utils/api';
import { createPromiseThunk } from '@utils/asyncUtils';
import * as actions from './actions';

export const updateToyThunk = createPromiseThunk(
  actions.UPDATE_TOY,
  api.putToyApi,
);
