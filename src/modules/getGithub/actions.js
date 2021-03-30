import { createAsyncAction } from '@utils/asyncUtils';

export const INITIALIZE_GITHUB = 'getGithub/INITIALIZE_GITHUB';
export const initializeGithub = () => ({
  type: INITIALIZE_GITHUB,
});
export const getGithubAsyncAction = createAsyncAction('getGithub/GET_GITHUB');
