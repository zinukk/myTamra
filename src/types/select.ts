import { Dispatch, SetStateAction } from 'react';

export interface ISelectProps {
  pageIdx: number;
  pages: JSX.Element[];
}

export interface ISelectedInfo {
  [index: string]: number;
  first: number;
  second: number;
  third: number;
  fourth: number;
  fifth: number;
  sixth: number;
  seventh: number;
}

export interface IPageProps {
  hasValue: (key: number) => boolean;
  canSubmit: boolean;
  setPageIdx: Dispatch<SetStateAction<number>>;
  selectedInfo: ISelectedInfo;
  selectedValues: number[];
  postSelectedMutate: (selectedInfo: ISelectedInfo) => void;
}

export interface IResponse {
  data: string | ((currVal: string) => string);
}

export type IFirstPageProps = Pick<IPageProps, 'setPageIdx' | 'hasValue'>;

export type ISecondPageProps = Pick<IPageProps, 'hasValue' | 'canSubmit' | 'postSelectedMutate' | 'selectedInfo'>;
