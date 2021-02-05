import { reducerUtils } from '@utils/asyncUtils';
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
        getSkillsStatus: reducerUtils.loading(),
      };
    case actions.GET_SKILLS_SUCCESS:
      return {
        ...state,
        getSkillsStatus: reducerUtils.success(action.payload),
      };
    case actions.GET_SKILLS_FAIL:
      return {
        ...state,
        getSkillsStatus: reducerUtils.fail(action.payload),
      };
    case actions.GET_ORGANIZATIONS:
      return {
        ...state,
        getOrganizationsStatus: reducerUtils.loading(),
      };
    case actions.GET_ORGANIZATIONS_SUCCESS:
      return {
        ...state,
        getOrganizationsStatus: reducerUtils.success(action.payload),
      };
    case actions.GET_ORGANIZATIONS_FAIL:
      return {
        ...state,
        getOrganizationsStatus: reducerUtils.fail(action.payload),
      };
    case actions.GET_CATEGORIES:
      return {
        ...state,
        getCategoriesStatus: reducerUtils.loading(),
      };
    case actions.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        getCategoriesStatus: reducerUtils.success(action.payload),
      };
    case actions.GET_CATEGORIES_FAIL:
      return {
        ...state,
        getCategoriesStatus: reducerUtils.fail(action.payload),
      };
    default:
      return state;
  }
};

export default getSkill;
