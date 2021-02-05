import { reducerUtils } from '../../utils/asyncUtils';
import * as actions from './actions';

const initialState = {
  getReadmeStatus: {
    loading: false,
    data: null,
    error: null,
  },
  getGithubStatus: {
    loading: false,
    data: null,
    error: null,
  },
  getContributorStatus: {
    loading: false,
    data: null,
    error: null,
  },
};

const getGithub = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_README:
      return {
        ...state,
        getReadmeStatus: reducerUtils.loading(),
      };
    case actions.GET_README_SUCCESS:
      return {
        ...state,
        getReadmeStatus: reducerUtils.success(action.payload),
      };
    case actions.GET_README_FAIL:
      return {
        ...state,
        getReadmeStatus: reducerUtils.fail(action.payload),
      };
    case actions.GET_GITHUB:
      return {
        ...state,
        getGithubStatus: reducerUtils.loading(),
      };
    case actions.GET_GITHUB_SUCCESS:
      return {
        ...state,
        getGithubStatus: reducerUtils.success(action.payload),
      };
    case actions.GET_GITHUB_FAIL:
      return {
        ...state,
        getGithubStatus: reducerUtils.fail(action.payload),
      };
    case actions.GET_CONTRIBUTOR:
      return {
        ...state,
        getContributorStatus: reducerUtils.loading(),
      };
    case actions.GET_CONTRIBUTOR_SUCCESS:
      return {
        ...state,
        getContributorStatus: reducerUtils.success(action.payload),
      };
    case actions.GET_CONTRIBUTOR_FAIL:
      return {
        ...state,
        getContributorStatus: reducerUtils.fail(action.payload),
      };
    default:
      return state;
  }
};

export default getGithub;
