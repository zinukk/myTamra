import API from './api';
import client from './client';

const ResultAPI = {
  getResult: (coast: string) => {
    return client.get(`${API.getResult}/${coast}`);
  },
};

export default ResultAPI;
