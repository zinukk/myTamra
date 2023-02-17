import styled from '@emotion/styled';
import Image from 'next/image';
import Snowfall from 'react-snowfall';
import MainBg from '/public/assets/images/image_bg.gif';
import MainLogo from '/public/assets/images/image_mainLogo.png';
import MainText from '/public/assets/images/image_startText.png';
import { IHomeProps } from '../../types/home';

const HomeView = ({ pageHandler }: IHomeProps) => {
  return (
    <StHome MainBg={MainBg} onClick={pageHandler}>
      <StHeader>
        <Image src={MainLogo} width={300} height={150} alt="로고" />
      </StHeader>
      <Snowfall snowflakeCount={60} />
      <StFooter MainText={MainText} />
    </StHome>
  );
};

const StHome = styled.div<{ MainBg: IImage }>`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.MainBg.src});
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const StHeader = styled.div`
  position: absolute;
  top: 23%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StFooter = styled.div<{ MainText: IImage }>`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 202px;
  height: 25px;
  background-image: url(${(props) => props.MainText.src});
  background-size: cover;
  background-repeat: no-repeat;
`;

export default HomeView;
