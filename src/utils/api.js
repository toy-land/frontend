import axios from 'axios';

const apiUrl = 'http://49.50.175.141:8080/api';

const config = {
  headers: { Authorization: `token ${process.env.REACT_APP_FRONT_API_TOKEN}` },
};

export const getToyApi = (id) => axios.get(`${apiUrl}/toys/${id}`, config);

export const getToysApi = (page = 0) => axios.get(`${apiUrl}/toys?page=${page}`, config);

export const getSkillsApi = () => axios.get(`${apiUrl}/skills`, config);

export const getOrgnizationsApi = () => axios.get(`${apiUrl}/organizations`, config);

export const getCategoriesApi = () => axios.get(`${apiUrl}/categories`, config);

export const postToyApi = (data) => axios.post(`${apiUrl}/toys`, data);

export const putToyApi = ({ id, passwd }) => axios.put(`${apiUrl}/toys/${id}`, { passwd });

export const deleteToyApi = ({ toyId, passwd }) => {
  const head = {
    headers: {
      password: String(passwd),
    },
  };

  return axios.delete(`${apiUrl}/toys/${toyId}`, head);
};

const readmeUrl = 'https://raw.githubusercontent.com';

export const getReadmeApi = (param) => axios.get(`${readmeUrl}${param}/master/README.md`);

const githubUrl = 'https://api.github.com/repos';

export const getGithubApi = (param) => axios.get(`${githubUrl}${param}`);

export const getContributorApi = (param) => axios.get(`${githubUrl}${param}/contributors`);
