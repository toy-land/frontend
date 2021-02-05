import { createPromiseThunk } from '@utils/asyncUtils';
import * as api from '../../utils/api';
import * as actions from './actions';

export const getReadmeThunk = createPromiseThunk(
  actions.GET_README,
  api.getReadmeApi,
);

export const getGithubThunk = createPromiseThunk(
  actions.GET_GITHUB,
  api.getGithubApi,
);

export const getContributorThunk = createPromiseThunk(
  actions.GET_CONTRIBUTOR,
  api.getContributorApi,
);
