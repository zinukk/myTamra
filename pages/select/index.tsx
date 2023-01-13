import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { selectedState } from '@src/store/selectedState';
import FirstPage from '@src/components/select/FirstPage';
import SecondPage from '@src/components/select/SecondPage';

const Select = () => {
  const selectedInfo = useRecoilValue<ISelect>(selectedState);

  const [pageIdx, setPageIdx] = useState<number>(0);

  const selectedValues = Object.values(selectedInfo);

  const pages = [<FirstPage key={0} selectedValues={selectedValues} setPageIdx={setPageIdx} />, <SecondPage key={1} />];

  return (
    <StSelect>
      <StHeader>가장 나다운 말을 선택해주세요</StHeader>
      <StBody>{pages[pageIdx]}</StBody>
    </StSelect>
  );
};

const StSelect = styled.div`
  padding: 0 20px;
  padding-top: 20px;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.color.backgroundColor};
  overflow: scroll;
`;

const StHeader = styled.p`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  color: ${({ theme }) => theme.color.gray600};
  font-size: 16px;
`;

const StBody = styled.div`
  width: 100%;
`;

export default Select;
