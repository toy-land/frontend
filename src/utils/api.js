import axios from 'axios';

const apiUrl = 'http://49.50.175.141:8080/api';

export const getToyApi = (id) => axios.get(`${apiUrl}/toys/${id}`);

export const getToysApi = (index = 0) => axios.get(`${apiUrl}/toys?index=${index}`);

// 아래는 수정 필요합니다.
export const postToyApi = (data) => axios.post(`${apiUrl}/demo.json`, data);

export const putToyApi = ({ id, data }) => axios.put(`${apiUrl}/demo/${id}`, data);

export const deleteToyApi = ({ id }) => axios.delete(`${apiUrl}/demo/${id}`);
