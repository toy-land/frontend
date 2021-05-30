import { toyNumPerPage } from '@constants/toyNumPerPage';
import { apiUrl } from '@constants/url';
import axios from 'axios';

export const getToyApi = (id) => axios.get(`${apiUrl}/toys/${id}`);

export const getToysApi = (page = 0) => axios.get(`${apiUrl}/toys?page=${page}&size=${toyNumPerPage}`);

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
