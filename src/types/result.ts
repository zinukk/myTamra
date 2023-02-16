import { Dispatch, SetStateAction } from 'react';

export interface IResultProps {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  present: Result;
  future: Result;
}

export interface IResult {
  result: Result[];
}

export interface ICreature {
  name: string;
  kind: string;
  image: string;
}

export interface IPlace {
  image: string;
  location: string;
  name: string;
  time: string;
  url: string;
}

export interface Result {
  dateType: string;
  coastalName: string;
  coastalImage: string;
  coastalContent: string;
  holdingCreature: ICreature[];
  location: string;
  locationImage: string;
  place: IPlace[];
  friend: string;
  friendName: string;
  enemy: string;
  enemyName: string;
}

export interface IClipboardProps {
  copyUrl: boolean;
  serviceUrl: string;
  handleCopyClipBoard: () => void;
}

export interface ICoastProps {
  coastalImage: string;
  descriptions: string[];
}

export interface IFit {
  enemy: string;
  enemyName: string;
  friend: string;
  friendName: string;
}

export interface IContent {
  id: number;
  image: string;
  type: string;
  name: string;
}

export interface IFitProps {
  CONTENTS: IContent[];
}

export interface IKakaoShareProps {
  share: () => void;
}

export interface IPlaceProps {
  dateType: string;
  place: IPlace[];
  pageHandler: (url: string) => void;
}
