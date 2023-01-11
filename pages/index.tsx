import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import MainBg from '../public/assets/images/image_bg.gif';

interface {
  MainBg : 
}

const Home = () => {
  console.log(MainBg);

  return <StHome>홈화면</StHome>;
};

const StHome = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${MainBg});
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

// const StHome = styled.div`
//   position: relative;
//   width: 100%;
//   height: 100%;
// `;

export default Home;
