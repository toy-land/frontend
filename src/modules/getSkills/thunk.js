import * as api from '@utils/api';
import { createPromiseThunk } from '@utils/asyncUtils';
import * as actions from './actions';

export const getSkillsThunk = createPromiseThunk(
  actions.GET_SKILLS,
  api.getSkillsApi,
);

export const getOrganizationsThunk = createPromiseThunk(
  actions.GET_ORGANIZATIONS,
  api.getOrgnizationsApi,
);

export const getCategoriesThunk = createPromiseThunk(
  actions.GET_CATEGORIES,
  api.getCategoriesApi,
);
