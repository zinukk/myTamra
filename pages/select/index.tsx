import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { selectedState } from '@src/store/selectedState';
import styled from '@emotion/styled';
import FirstPage from '@src/components/select/FirstPage';
import SecondPage from '@src/components/select/SecondPage';

const Select = () => {
  const router = useRouter();

  const [pageIdx, setPageIdx] = useState<number>(0);

  const selectedInfo = useRecoilValue<ISelect>(selectedState);

  const pages = [<FirstPage key={0} />, <SecondPage key={1} />];

  const isValid = !Object.values(selectedInfo).includes(0);

  return (
    <StSelect>
      <StHeader>가장 나다운 말을 선택해주세요</StHeader>
      <StBody>{pages[pageIdx]}</StBody>
      {pageIdx === 1 && (
        <StFooter>
          <StNextBtn isValid={isValid}>결과보기</StNextBtn>
        </StFooter>
      )}
    </StSelect>
  );
};

const StSelect = styled.div`
  padding: 20px;
  padding-top: 30px;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.color.backgroundColor};
`;

const StHeader = styled.p`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  color: ${({ theme }) => theme.color.gray600};
  font-size: 16px;
`;

const StBody = styled.div``;

const StFooter = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StNextBtn = styled.button<{ isValid: boolean }>`
  width: 271px;
  height: 60px;
  background: ${({ theme, isValid }) => (isValid ? theme.color.mainColor : theme.color.disabledColor)};
  border-radius: 8px;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.backgroundColor};
  cursor: pointer;
`;

export default Select;