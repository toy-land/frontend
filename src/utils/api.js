import axios from 'axios';

const apiUrl = 'http://49.50.175.141:8080/api';

export const getToyApi = (id) => axios.get(`${apiUrl}/toys/${id}`);

export const getToysApi = (page = 0) => axios.get(`${apiUrl}/toys?page=${page}`);

export const getSkillsApi = () => axios.get(`${apiUrl}/skills`);

const readmeUrl = 'https://raw.githubusercontent.com';

export const getReadmeApi = (param) => axios.get(`${readmeUrl}${param}/master/README.md`);

const githubUrl = 'https://api.github.com/repos';

export const getGithubApi = (param) => axios.get(`${githubUrl}${param}`);

export const getContributorApi = (param) => axios.get(`${githubUrl}${param}/contributors`);

// 아래는 수정 필요합니다.
export const postToyApi = (data) => axios.post(`${apiUrl}/toys`, data);

export const putToyApi = ({ id, data }) => axios.put(`${apiUrl}/demo/${id}`, data);

export const deleteToyApi = ({ id }) => axios.delete(`${apiUrl}/demo/${id}`);
