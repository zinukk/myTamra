import styled from '@emotion/styled';
import { questionIdxState } from '@src/store/questionIdxState';
import { selectedState } from '@src/store/selectedState';
import { ISelectedInfo } from '@src/types/select';
import { useRecoilState, useSetRecoilState } from 'recoil';

interface IProps {
  state: string;
  title: string;
  button: Button[];
}

const Question = ({ title, button, state }: IProps) => {
  const [selectedInfo, setSelectedInfo] = useRecoilState<ISelectedInfo>(selectedState);
  const setQuestionIdx = useSetRecoilState(questionIdxState);

  const buttonHandler = (state: string, key: number) => {
    setSelectedInfo({ ...selectedInfo, [state]: key });
    setQuestionIdx((prev) => prev + 1);
  };

  return (
    <StQuestion>
      <StHeader>{title}</StHeader>
      <StBody>
        {button.map(({ key, option }) => (
          <StButton
            isSelected={key === selectedInfo[state]}
            key={key}
            onClick={() => {
              buttonHandler(state, key);
            }}>
            {option}
          </StButton>
        ))}
      </StBody>
    </StQuestion>
  );
};

const StQuestion = styled.div`
  margin: 40px 0;
  width: 100%;
`;

const StHeader = styled.h1`
  margin: 8px 0;
  color: white;
  font-size: 19px;
  font-weight: 600;
`;

const StBody = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 0 10px;
  margin: 20px 0;
  width: 100%;
  height: 96px;
`;

const StButton = styled.button<{ isSelected: boolean }>`
  background: ${({ theme, isSelected }) => (isSelected ? theme.color.mainColor : theme.color.backgroundColor)};
  border-radius: 11px;
  border: ${({ theme, isSelected }) => (isSelected ? 'none' : `1px solid ${theme.color.subColor}`)};
  color: ${({ theme, isSelected }) => (isSelected ? theme.color.backgroundColor : theme.color.subColor)};
  cursor: pointer;
`;

export default Question;
