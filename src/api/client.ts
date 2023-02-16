import axios, { AxiosError, AxiosResponse } from 'axios';

export const baseURL: string = process.env.NEXT_PUBLIC_BASE_URL as string;

const client = axios.create({ baseURL });

client.interceptors.response.use(
  (res: AxiosResponse) => {
    if (res.status === 200) {
      return res.data.data;
    } else {
      return [res.data.code, res.data.message];
    }
  },
  (error: AxiosError<IError>) => {
    return [true, error.message];
  },
);

export default client;
