import { atom } from 'recoil';

export const questionIdxState = atom<number>({
  key: 'questionIdxState',
  default: 1,
});
