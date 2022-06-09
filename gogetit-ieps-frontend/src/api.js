import axios from 'axios';
export const BACKEND_HOST = 'http://127.0.0.1/index.php'

export default axios.create({
  baseURL: `${BACKEND_HOST}/api`
});

