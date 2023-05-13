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
  iconColor: boolean | string;
  submit: () => void;
  goNext: () => void;
  showNextButton: boolean;
  questions: Question[];
  isCompleted: boolean;
}

export interface IResponse {
  data: string | ((currVal: string) => string);
}

export type IFirstPageProps = Pick<IPageProps, 'goNext' | 'iconColor' | 'showNextButton' | 'questions'>;

export type ISecondPageProps = Pick<IPageProps, 'submit' | 'questions' | 'isCompleted'>;
