import { apiUrl } from '@constants/url';
import axios from 'axios';

export const getSkillsApi = () => axios.get(`${apiUrl}/skills`);

export const getOrganizationsApi = () => axios.get(`${apiUrl}/organizations`);

export const getCategoriesApi = () => axios.get(`${apiUrl}/categories`);
