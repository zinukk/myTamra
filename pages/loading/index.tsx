/* eslint-disable react-hooks/rules-of-hooks */
import styled from '@emotion/styled';
import { coastState } from '@src/store/coastState';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import Spinner from '../../public/assets/images/image_spinner.gif';

const loading = () => {
  const coast = useRecoilValue(coastState);

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push(`/result/${coast}`);
    }, 2000);
  }, []);

  return (
    <StLoading>
      <StBody>
        <Image src={Spinner} alt="스피너 이미지" width={183} height={145} />
        <StText>
          현재와 미래의 <br /> 나의 모습을 만들고 있어요
        </StText>
      </StBody>
    </StLoading>
  );
};

const StLoading = styled.div`
  position: relative;
  padding: 20px;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.color.backgroundColor};
`;

const StBody = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const StText = styled.p`
  margin-top: 20px;
  color: ${({ theme }) => theme.color.whiteColor};
  font-size: 21px;
  text-align: center;
  line-height: 30px;
`;

export default loading;
