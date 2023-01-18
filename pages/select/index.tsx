import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedState } from '@src/store/selectedState';
import FirstPage from '@src/components/select/FirstPage';
import SecondPage from '@src/components/select/SecondPage';
import usePostSelected from '@src/hooks/mutation/usePostSelected';
import client, { baseURL } from '@src/api/client';
import { useMutation } from 'react-query';
import SelectAPI from '@src/api/select';
import { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { locationState } from '@src/store/locationState';

const Select = () => {
  const router = useRouter();

  const setLocationState = useSetRecoilState(locationState);

  const selectedInfo = useRecoilValue<ISelect>(selectedState);

  const [pageIdx, setPageIdx] = useState<number>(0);

  const selectedValues = Object.values(selectedInfo);

  const { mutate: postSelectedMutate } = useMutation((data: ISelect) => SelectAPI.postSelected(data), {
    onSuccess: (data: AxiosResponse) => {
      setLocationState(data as any);
      router.push('/loading');
    },
  });

  const pages = [
    <FirstPage key={0} selectedValues={selectedValues} setPageIdx={setPageIdx} />,
    <SecondPage
      key={1}
      selectedInfo={selectedInfo}
      selectedValues={selectedValues}
      postSelectedMutate={postSelectedMutate}
    />,
  ];

  return (
    <StSelect>
      <StHeader>가장 나다운 말을 선택해주세요</StHeader>
      <StBody>{pages[pageIdx]}</StBody>
    </StSelect>
  );
};

const StSelect = styled.div`
  position: relative;
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
