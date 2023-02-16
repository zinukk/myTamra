import styled from '@emotion/styled';
import React from 'react';
import Question from '../../common/Question';
import { FIRST_QUESTION } from '@src/mocks/FIRST_QUESTIONS';
import NextIcon from '/public/assets/svgs/svgs_active.svg';
import { IFirstPageProps } from '@src/types/select';

const FirstPageView = ({ setPageIdx, hasValue }: IFirstPageProps) => {
  return (
    <StFirstPage>
      <StBody>
        {FIRST_QUESTION.map(({ id, state, title, button }) => (
          <div key={id}>{hasValue(id - 1) && <Question state={state} title={title} button={button} />}</div>
        ))}
      </StBody>
      {hasValue(2) && (
        <StFooter>
          <NextIcon
            fill={hasValue(3) ? '#84F5B8' : '#8A8B91'}
            onClick={() => {
              hasValue(3) && setPageIdx((prev: number) => prev + 1);
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

export default FirstPageView;
