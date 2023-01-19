import { atom } from 'recoil';

export const coastState = atom<string>({
  key: 'coastState',
  default: '',
});
