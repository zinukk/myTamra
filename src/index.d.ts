interface Color {
  mainColor: string;
  subColor: string;
  redColor: string;
  disabledColor: string;
  backgroundColor: string;
  whiteColor: string;
  blackColor: string;
  gray400: string;
  gray500: string;
  gray600: string;
  gray700: string;
  gray800: string;
  gray900: string;
  gray950: string;
}

interface IImage {
  width: number;
  height: number;
  src: string;
}

interface IOption {
  id: number;
  text: string;
}

interface Button {
  key: number;
  option: string;
}

interface IError {
  message: string;
}

interface Question {
  id: number;
  state: string;
  title: string;
  button: Button[];
}

declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.gif';
