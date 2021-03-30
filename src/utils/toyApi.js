import axios from 'axios';

const apiUrl = 'http://49.50.175.141:8080/api';

export const getToyApi = (id) => axios.get(`${apiUrl}/toys/${id}`);

export const getToysApi = (page = 0) => axios.get(`${apiUrl}/toys?page=${page}`);

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
