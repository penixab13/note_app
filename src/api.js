import axios from 'axios';

const api = axios.create({
    baseURL: 'https://2k9uxmjdyj.execute-api.us-east-1.amazonaws.com/dev'
});

export default api;
