import axios from 'axios';

const BASE_URL = 'https://qrmovie-backend.up.railway.app/';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});