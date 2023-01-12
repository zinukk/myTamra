import styled from '@emotion/styled';
import { selectedState } from '@src/store/selectedState';
import React from 'react';
import { useRecoilState } from 'recoil';

interface IProps {
  title: string;
  option: IOption[];
}

const Question = ({ title, option }: IProps) => {
  const [seletedInfo, setSelectedInfo] = useRecoilState<ISelect>(selectedState);

  return (
    <StQuestion>
      <StHeader>{title}</StHeader>
      <StBody>
        {option.map(({ id, text }) => (
          <StButton isSelected={false} key={id}>
            {text}
          </StButton>
        ))}
      </StBody>
    </StQuestion>
  );
};

const StQuestion = styled.div`
  width: 100%;
`;

const StHeader = styled.p`
  margin: 8px 0;
  color: white;
  font-size: 19px;
  font-weight: 600;
`;

const StBody = styled.div`
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
  border: ${({ theme, isSelected }) => (isSelected ? 'none' : `1px solid ${theme.color.mainColor}`)};
  color: ${({ theme, isSelected }) => (isSelected ? theme.color.backgroundColor : theme.color.mainColor)};
  cursor: pointer;
`;

export default Question;
