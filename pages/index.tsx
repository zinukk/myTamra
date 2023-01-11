import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Snowfall from 'react-snowfall';
import MainBg from '../public/assets/images/image_bg.gif';
import MainLogo from '../public/assets/images/image_logo.png';
import MainText from '../public/assets/images/image_startText.png';

const Home = () => {
  const router = useRouter();

  return (
    <StHome
      MainBg={MainBg}
      onClick={() => {
        router.push('/select');
      }}>
      <StHeader MainLogo={MainLogo} />
      <Snowfall snowflakeCount={60} />
      <StFooter MainText={MainText} />
    </StHome>
  );
};

const StHome = styled.div<{ MainBg: any }>`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.MainBg.src});
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const StHeader = styled.div<{ MainLogo: any }>`
  position: absolute;
  top: 23%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 130px;
  background-image: url(${(props) => props.MainLogo.src});
  background-size: cover;
  background-repeat: no-repeat;
`;

const StFooter = styled.div<{ MainText: any }>`
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

export default Home;
