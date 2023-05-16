import styled from '@emotion/styled';
import Question from '../../common/Question';
import NextIcon from '/public/assets/svgs/svgs_active.svg';
import { IFirstPageProps } from '@src/types/select';

const VFirstPage = ({ goNext, iconColor, showNextButton, questions }: IFirstPageProps) => {
  return (
    <StFirstPage>
      <StBody>
        {questions.map(({ id, state, title, button }) => (
          <div key={id}>{<Question state={state} title={title} button={button} />}</div>
        ))}
      </StBody>
      {showNextButton && (
        <StFooter>
          <NextIcon fill={iconColor} onClick={goNext} />
        </StFooter>
      )}
    </StFirstPage>
  );
};

const StFirstPage = styled.div`
  width: 100%;
`;

const StBody = styled.main`
  width: 100%;
  overflow: scroll;
`;

const StFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
  width: 100%;
`;

export default VFirstPage;
