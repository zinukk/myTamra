import API from './api';
import client from './client';

const SelectAPI = {
  postSelected: (data: ISelect) => {
    return client.post(`${API.postSelected}`, data);
  },
};

export default SelectAPI;
