import styled from '@emotion/styled';
import Image from 'next/image';
import React, { useEffect } from 'react';
import KakaoImg from '../../../public/assets/images/image_kakaoShare.png';

const KakaoShare = () => {
  useEffect(() => {
    const { Kakao } = window;
    if (!Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    }
  }, []);

  const share = () => {
    const { Kakao } = window;
    Kakao.Link.sendScrap({
      requestUrl: 'https://mytamla.netlify.app',
    });
  };

  return (
    <StKakaoShare onClick={share}>
      <Image src={KakaoImg} alt="카카오 이미지" layout="fill" />
    </StKakaoShare>
  );
};

const StKakaoShare = styled.div`
  position: relative;
  margin-top: 10px;
  width: 100%;
  height: 55px;
`;

export default KakaoShare;
