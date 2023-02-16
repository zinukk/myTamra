import styled from '@emotion/styled';
import { IKakaoShareProps } from '@src/types/result';
import Image from 'next/image';
import KakaoImg from '/public/assets/images/image_kakaoShare.png';

const KakaoShareView = ({ share }: IKakaoShareProps) => {
  return (
    <StKakaoShare onClick={share}>
      <Image src={KakaoImg} alt="카카오 이미지" fill />
    </StKakaoShare>
  );
};

const StKakaoShare = styled.div`
  position: relative;
  margin-top: 10px;
  width: 100%;
  height: 55px;
`;

export default KakaoShareView;
