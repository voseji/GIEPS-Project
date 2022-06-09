import axios from 'axios';
export const BACKEND_HOST = 'http://159.223.135.118/index.php'

export default axios.create({
  baseURL: `${BACKEND_HOST}/api`
});

