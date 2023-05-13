import styled from '@emotion/styled';
import { ISecondPageProps } from '@src/types/select';
import Question from '../../common/Question';

const VSecondPage = ({ submit, questions, isCompleted }: ISecondPageProps) => {
  return (
    <StSecondPage>
      <StBody>
        {questions.map(({ id, state, title, button }) => (
          <div key={id}>{<Question state={state} title={title} button={button} />}</div>
        ))}
      </StBody>
      <StFooter>
        <StButton onClick={submit} isCompleted={isCompleted}>
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

const StButton = styled.button<{ isCompleted: boolean | string }>`
  position: absolute;
  left: 50%;
  bottom: 1%;
  transform: translate(-50%, -50%);
  width: 271px;
  height: 60px;
  color: ${({ theme }) => theme.color.backgroundColor};
  background: ${({ theme, isCompleted }) => (isCompleted ? theme.color.mainColor : theme.color.disabledColor)};
  border-radius: 8px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

export default VSecondPage;
