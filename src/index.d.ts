interface Color {
  mainColor: string;
  subColor: string;
  redColor: string;
  disabledColor: string;
  backgroundColor: string;
  whiteColor: string;
  blackColor: string;
  gray500: string;
  gray600: string;
  gray700: string;
  gray800: string;
  gray900: string;
  gray950: string;
}

interface IOption {
  id: number;
  text: string;
}

interface ISelect {
  [index: string]: number;
  first: number;
  second: number;
  third: number;
  fourth: number;
  fifth: number;
  sixth: number;
  seventh: number;
}

interface Button {
  key: number;
  option: string;
}

interface Question {
  id: number;
  state: string;
  title: string;
  button: Button[];
}

interface Creature {
  name: string;
  kind: string;
  image: string;
}

interface Place {
  image: string;
  location: string;
  name: string;
  time: string;
  url: string;
}

interface Result {
  dateType: string;
  coastalName: string;
  coastalImage: string;
  coastalContent: string;
  holdingCreature: Creature[];
  location: string;
  locationImage: string;
  place: Place[];
  friend: string;
  friendName: string;
  enemy: string;
  enemyName: string;
}

declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.gif';
