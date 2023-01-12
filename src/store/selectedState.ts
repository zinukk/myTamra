import { atom } from 'recoil';

export const selectedState = atom<ISelect>({
  key: 'selectedState',
  default: {
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0,
    sixth: 0,
    seventh: 0,
  },
});
