import * as githubApi from '@utils/githubApi';
import * as actions from './actions';

export const getGithubThunk = (param) => async (dispatch) => {
  dispatch({ type: actions.getGithubAsyncAction.request, payload: param });
  try {
    const readmeData = await githubApi.getReadmeApi(param);
    const githubData = await githubApi.getGithubApi(param);
    const contributorData = await githubApi.getContributorApi(param);
    dispatch({
      type: actions.getGithubAsyncAction.success,
      payload: {
        readmeData: readmeData.data,
        githubData: githubData.data,
        contributorData: contributorData.data,
      },
    });
  } catch (e) {
    dispatch({ type: actions.getGithubAsyncAction.failure, payload: e.message });
  }
};
