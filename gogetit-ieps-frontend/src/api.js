import axios from 'axios';
export const BACKEND_HOST = 'https://gogetit-ieps-backend.herokuapp.com/index.php'

export default axios.create({
  baseURL: `${BACKEND_HOST}/api`
});

