import axios from 'axios';

const apiUrl = 'http://49.50.175.141:8080/api';

export const getSkillsApi = () => axios.get(`${apiUrl}/skills`);

export const getOrganizationsApi = () => axios.get(`${apiUrl}/organizations`);

export const getCategoriesApi = () => axios.get(`${apiUrl}/categories`);
