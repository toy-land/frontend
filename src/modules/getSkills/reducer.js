import { getAsyncState } from '@utils/asyncUtils';
import * as actions from './actions';

const initialState = {
  getSkillsStatus: {
    loading: false,
    data: null,
    success: null,
    error: null,
  },
  getOrganizationsStatus: {
    loading: false,
    data: null,
    success: null,
    error: null,
  },
  getCategoriesStatus: {
    loading: false,
    data: null,
    success: null,
    error: null,
  },
};

const getSkill = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_SKILLS:
      return {
        ...state,
        getSkillsStatus: getAsyncState.loading(),
      };
    case actions.GET_SKILLS_SUCCESS:
      return {
        ...state,
        getSkillsStatus: getAsyncState.success(action.payload),
      };
    case actions.GET_SKILLS_FAIL:
      return {
        ...state,
        getSkillsStatus: getAsyncState.fail(action.payload),
      };
    case actions.GET_ORGANIZATIONS:
      return {
        ...state,
        getOrganizationsStatus: getAsyncState.loading(),
      };
    case actions.GET_ORGANIZATIONS_SUCCESS:
      return {
        ...state,
        getOrganizationsStatus: getAsyncState.success(action.payload),
      };
    case actions.GET_ORGANIZATIONS_FAIL:
      return {
        ...state,
        getOrganizationsStatus: getAsyncState.fail(action.payload),
      };
    case actions.GET_CATEGORIES:
      return {
        ...state,
        getCategoriesStatus: getAsyncState.loading(),
      };
    case actions.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        getCategoriesStatus: getAsyncState.success(action.payload),
      };
    case actions.GET_CATEGORIES_FAIL:
      return {
        ...state,
        getCategoriesStatus: getAsyncState.fail(action.payload),
      };
    default:
      return state;
  }
};

export default getSkill;
