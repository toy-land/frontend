import * as api from '@utils/api';
import { createPromiseThunk } from '@utils/asyncUtils';
import * as actions from './actions';

export const writeToyThunk = createPromiseThunk(
  actions.REMOVE_TOY,
  api.deleteToyApi,
);
