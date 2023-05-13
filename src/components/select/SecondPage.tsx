import { ISecondPageProps } from '@src/types/select';
import VSecondPage from './vac/VSecondPage';
import { QUESTIONS } from '@src/mocks/QUESTIONS';
import { useRecoilValue } from 'recoil';
import { questionIdxState } from '@src/store/questionIdxState';

interface IProps {
  selectedValues: number[];
  postSelectedMutate: () => void;
}

const SecondPage = ({ selectedValues, postSelectedMutate }: IProps) => {
  const questionIdx = useRecoilValue(questionIdxState);

  const submit = () => !selectedValues.includes(0) && postSelectedMutate();

  const questions = QUESTIONS.slice(4, questionIdx);

  const isCompleted = !selectedValues.includes(0);

  const pageProps: ISecondPageProps = {
    submit,
    questions,
    isCompleted,
  };

  return <VSecondPage {...pageProps} />;
};

export default SecondPage;
