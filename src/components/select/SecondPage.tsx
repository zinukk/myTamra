import { ISecondPageProps, ISelectedInfo } from '@src/types/select';
import SecondPageView from './Views/SecondPageView';

interface IProps {
  selectedInfo: ISelectedInfo;
  selectedValues: number[];
  postSelectedMutate: (selectedInfo: ISelectedInfo) => void;
}

const SecondPage = ({ selectedValues, postSelectedMutate, selectedInfo }: IProps) => {
  const PageProps: ISecondPageProps = {
    hasValue: (key: number) => {
      return selectedValues[key] !== 0;
    },
    canSubmit: !selectedValues.includes(0),
    postSelectedMutate,
    selectedInfo,
  };

  return <SecondPageView {...PageProps} />;
};

export default SecondPage;
