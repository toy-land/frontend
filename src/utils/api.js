import axios from 'axios';

const apiUrl = 'https://opendb.gitools.net';

export const getToyApi = (id) => axios.get(`${apiUrl}/demo/${id}`);

export const getToysApi = () => axios.get(`${apiUrl}/demo`);

export const postToyApi = (data) => axios.post(`${apiUrl}/demo.json`, data);

export const putToyApi = ({ id, data }) => axios.put(`${apiUrl}/demo/${id}`, data);

export const deleteToyApi = ({ id }) => axios.delete(`${apiUrl}/demo/${id}`);

const readmeUrl = 'https://raw.githubusercontent.com/';

export const getReadmeApi = (param) => axios.get(`${readmeUrl}${param}/master/README.md`);

const githubUrl = 'https://api.github.com/repos';

export const getGithubApi = (param) => axios.get(`${githubUrl}${param}`);

export const getContributorApi = (param) => axios.get(`${githubUrl}${param}/contributors`);
