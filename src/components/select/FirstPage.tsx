import { Dispatch, SetStateAction } from 'react';
import { IFirstPageProps } from '@src/types/select';
import FirstPageView from './Views/FirstPageView';

interface IProps {
  setPageIdx: Dispatch<SetStateAction<number>>;
  selectedValues: number[];
}

const FirstPage = ({ selectedValues, setPageIdx }: IProps) => {
  const PageProps: IFirstPageProps = {
    setPageIdx,
    hasValue: (key: number) => {
      return selectedValues[key] !== 0;
    },
  };

  return <FirstPageView {...PageProps} />;
};

export default FirstPage;
