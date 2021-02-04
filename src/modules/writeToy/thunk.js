import * as api from '../../utils/api';
import * as actions from './actions';
import { createPromiseThunk } from '../../utils/asyncUtils';

export const writeToyThunk = createPromiseThunk(
  actions.WRITE_TOY,
  api.postToyApi,
);
