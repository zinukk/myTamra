import styled from '@emotion/styled';
import { ISecondPageProps } from '@src/types/select';
import { SECOND_QUESTION } from '@src/mocks/SECOND_QUESTIONS';
import Question from '../../common/Question';

const SecondPageView = ({ hasValue, canSubmit, postSelectedMutate, selectedInfo }: ISecondPageProps) => {
  return (
    <StSecondPage>
      <StBody>
        {SECOND_QUESTION.map(({ id, state, title, button }) => (
          <div key={id}>{hasValue(id - 1) && <Question state={state} title={title} button={button} />}</div>
        ))}
      </StBody>
      <StFooter>
        <StButton
          onClick={() => {
            postSelectedMutate(selectedInfo);
          }}
          canSubmit={canSubmit}>
          결과 보기
        </StButton>
      </StFooter>
    </StSecondPage>
  );
};

const StSecondPage = styled.div`
  width: 100%;
`;

const StBody = styled.div`
  width: 100%;
`;

const StFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 100%;
`;

const StButton = styled.button<{ canSubmit: boolean }>`
  position: absolute;
  left: 50%;
  bottom: 1%;
  transform: translate(-50%, -50%);
  width: 271px;
  height: 60px;
  color: ${({ theme }) => theme.color.backgroundColor};
  background: ${({ theme, canSubmit }) => (canSubmit ? theme.color.mainColor : theme.color.disabledColor)};
  border-radius: 8px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

export default SecondPageView;
