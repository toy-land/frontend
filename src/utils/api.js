import axios from 'axios';

const apiUrl = 'https://opendb.gitools.net';

export const getToyApi = (id) => axios.get(`${apiUrl}/demo/${id}`);

export const getToysApi = () => axios.get(`${apiUrl}/demo`);

export const postToyApi = (data) => axios.post(`${apiUrl}/demo.json`, data);

export const putToyApi = ({ id, data }) => axios.put(`${apiUrl}/demo/${id}`, data);

export const deleteToyApi = ({ id }) => axios.delete(`${apiUrl}/demo/${id}`);
