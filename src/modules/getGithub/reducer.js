import { getAsyncState } from '../../utils/asyncUtils';
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
        getReadmeStatus: getAsyncState.loading(),
      };
    case actions.GET_README_SUCCESS:
      return {
        ...state,
        getReadmeStatus: getAsyncState.success(action.payload),
      };
    case actions.GET_README_FAIL:
      return {
        ...state,
        getReadmeStatus: getAsyncState.fail(action.payload),
      };
    case actions.GET_GITHUB:
      return {
        ...state,
        getGithubStatus: getAsyncState.loading(),
      };
    case actions.GET_GITHUB_SUCCESS:
      return {
        ...state,
        getGithubStatus: getAsyncState.success(action.payload),
      };
    case actions.GET_GITHUB_FAIL:
      return {
        ...state,
        getGithubStatus: getAsyncState.fail(action.payload),
      };
    case actions.GET_CONTRIBUTOR:
      return {
        ...state,
        getContributorStatus: getAsyncState.loading(),
      };
    case actions.GET_CONTRIBUTOR_SUCCESS:
      return {
        ...state,
        getContributorStatus: getAsyncState.success(action.payload),
      };
    case actions.GET_CONTRIBUTOR_FAIL:
      return {
        ...state,
        getContributorStatus: getAsyncState.fail(action.payload),
      };
    default:
      return state;
  }
};

export default getGithub;
