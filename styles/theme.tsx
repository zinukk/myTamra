import { Theme } from '@emotion/react';

const color = {
  mainColor: '#84F5B8',
  subColor: '#ABC2A7',
  disabledColor: '#8A8B91',
  backgroundColor: '#1E2029',
  whiteColor: '#fff',
  blackColor: '#000',
  gray500: '#A9ABB8',
  gray600: '#858899',
  gray700: '#525463',
  gray800: '#3E404C',
  gray900: '#2B2D36',
  gray950: '#2B2D36',
};

const theme: Theme = {
  color: {
    mainColor: color.mainColor,
    subColor: color.subColor,
    backgroundColor: color.backgroundColor,
    whiteColor: color.whiteColor,
    blackColor: color.blackColor,
    disabledColor: color.disabledColor,
    gray500: color.gray500,
    gray600: color.gray600,
    gray700: color.gray700,
    gray800: color.gray800,
    gray900: color.gray900,
    gray950: color.gray950,
  },
};

export default theme;
