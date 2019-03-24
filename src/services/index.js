import axios from 'axios';

import Requester from './requester';
import { BASE_URL } from 'config/endpoints';

const requester = new Requester(
  axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
  }),
);

export {
  requester
};
