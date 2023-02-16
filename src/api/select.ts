import { ISelectedInfo } from '@src/types/select';
import API from './api';
import client from './client';

const SelectAPI = {
  postSelected: (data: ISelectedInfo) => {
    return client.post(`${API.postSelected}`, data);
  },
};

export default SelectAPI;
