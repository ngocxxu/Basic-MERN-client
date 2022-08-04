import axios from 'axios';

const URL = 'http://localhost:5050';

export const fetchPosts = () => axios.get(`${URL}/posts`);
