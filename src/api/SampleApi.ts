import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
	baseURL: 'BASE_URL',
};

export const client = axios.create(axiosConfig);

// * usage
// const response = await client.get('/user');
// const response = await client.post('/user/add', { id: 'mo', name: 'mocci' });
