import { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import Question from '../common/Question';
import { FIRST_QUESTION } from '@src/mocks/FIRST_QUESTIONS';
import NextIcon from '/public/assets/svgs/svgs_active.svg';

interface IProps {
  selectedValues: number[];
  setPageIdx: Dispatch<SetStateAction<number>>;
}

const FirstPage = ({ selectedValues, setPageIdx }: IProps) => {
  const isValid = (key: number) => {
    return selectedValues[key] !== 0;
  };

  return (
    <StFirstPage>
      <StBody>
        {FIRST_QUESTION.map(({ id, state, title, button }) => (
          <>{isValid(id - 1) && <Question key={id} state={state} title={title} button={button} />}</>
        ))}
      </StBody>
      {isValid(2) && (
        <StFooter>
          <NextIcon
            fill={isValid(3) ? '#84F5B8' : '#8A8B91'}
            onClick={() => {
              isValid(3) && setPageIdx((prev) => prev + 1);
            }}
          />
        </StFooter>
      )}
    </StFirstPage>
  );
};

const StFirstPage = styled.div`
  width: 100%;
`;

const StBody = styled.div`
  width: 100%;
  overflow: scroll;
`;

const StFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
  width: 100%;
`;

export default FirstPage;
