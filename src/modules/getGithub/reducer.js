import { getAsyncState } from '@utils/asyncUtils';
import * as actions from './actions';

const initialState = {
  loading: false,
  data: {
    readmeData: null,
    githubData: null,
    contributorData: null,
  },
  error: null,
  success: null,
};

const getGithub = (state = initialState, action) => {
  switch (action.type) {
    case actions.INITIALIZE_GITHUB:
      return initialState;
    case actions.getGithubAsyncAction.request:
      return {
        ...state,
        ...getAsyncState.loading(state.data),
      };
    case actions.getGithubAsyncAction.success:
      return {
        ...state,
        ...getAsyncState.success({ ...action.payload }),
      };
    case actions.getGithubAsyncAction.failure:
      return {
        ...state,
        ...getAsyncState.fail(action.payload, state.data),
      };
    default:
      return state;
  }
};

export default getGithub;
