import axios from 'axios';
export const BACKEND_HOST = 'https://gieps-backend.littlefingers.ng/index.php'

export default axios.create({
  baseURL: `${BACKEND_HOST}/api`
});

