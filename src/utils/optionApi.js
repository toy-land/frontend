import axios from 'axios';

const apiUrl = 'https://49.50.161.45:8080/api';

export const getSkillsApi = () => axios.get(`${apiUrl}/skills`);

export const getOrganizationsApi = () => axios.get(`${apiUrl}/organizations`);

export const getCategoriesApi = () => axios.get(`${apiUrl}/categories`);
