import { ISelectedInfo } from '@src/types/select';

export const convertToArray = (object: ISelectedInfo) => {
  return Object.values(object);
};
