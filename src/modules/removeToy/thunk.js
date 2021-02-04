import * as api from '../../utils/api';
import * as actions from './actions';
import { createPromiseThunk } from '../../utils/asyncUtils';

export const writeToyThunk = createPromiseThunk(
  actions.REMOVE_TOY,
  api.deleteToyApi,
);
