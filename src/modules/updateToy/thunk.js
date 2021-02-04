import * as api from '../../utils/api';
import * as actions from './actions';
import { createPromiseThunk } from '../../utils/asyncUtils';

export const updateToyThunk = createPromiseThunk(
  actions.UPDATE_TOY,
  api.putToyApi,
);
