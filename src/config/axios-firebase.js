import axios from 'axios';

const instance = axios.create({
    baseURL: 'URL_FIREBASE'
});

export default instance;