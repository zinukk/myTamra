import { Dispatch, SetStateAction } from 'react';
import { IFirstPageProps } from '@src/types/select';
import VFirstPage from './vac/VFirstPage';
import { QUESTIONS } from '@src/mocks/QUESTIONS';
import { useRecoilValue } from 'recoil';
import { questionIdxState } from '@src/store/questionIdxState';

interface IProps {
  setPageIdx: Dispatch<SetStateAction<number>>;
  selectedValues: number[];
}

const FirstPage = ({ selectedValues, setPageIdx }: IProps) => {
  const questionIdx = useRecoilValue(questionIdxState);

  const end = questionIdx === 5 ? 4 : questionIdx;

  const isAnswered = (key: number) => selectedValues[key] !== 0;

  const goNext = () => isAnswered(3) && setPageIdx((prev: number) => prev + 1);

  const iconColor = isAnswered(3) ? '#84F5B8' : '#8A8B91';

  const showNextButton = isAnswered(2);

  const questions = QUESTIONS.slice(0, end);

  const pageProps: IFirstPageProps = {
    goNext,
    iconColor,
    showNextButton,
    questions,
  };

  return <VFirstPage {...pageProps} />;
};

export default FirstPage;
