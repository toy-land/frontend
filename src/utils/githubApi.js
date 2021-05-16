import { readmeUrl, repoUrl } from '@constants/url';
import axios from 'axios';

export const getReadmeApi = (param) => axios.get(`${readmeUrl}${param}/master/README.md`);

const config = {
  headers: {
    Authorization: `token ${process.env.REACT_APP_FRONTEND_GITHUB_TOKEN}`,
  },
};

export const getGithubApi = (param) => axios.get(
  `${repoUrl}${param}`,
  process.env.REACT_APP_FRONTEND_GITHUB_TOKEN && config,
);

export const getContributorApi = (param) => axios.get(
  `${repoUrl}${param}/contributors`,
  process.env.REACT_APP_FRONTEND_GITHUB_TOKEN && config,
);
