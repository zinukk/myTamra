import { useRouter } from 'next/router';
import { IHomeProps } from '@src/types/home';
import SEO from '@src/components/common/SEO';
import HomeView from '@src/components/home/HomeView';
import { useResetRecoilState } from 'recoil';
import { selectedState } from '@src/store/selectedState';
import { useEffect } from 'react';
import { questionIdxState } from '@src/store/questionIdxState';

const Home = () => {
  const router = useRouter();

  const resetAnswer = useResetRecoilState(selectedState);

  const resetQuestionIdx = useResetRecoilState(questionIdxState);

  useEffect(() => {
    resetAnswer();
    resetQuestionIdx();
  }, []);

  const HomeProps: IHomeProps = {
    pageHandler: () => router.push('/select'),
  };

  return (
    <>
      <SEO title="홈" />
      <HomeView {...HomeProps} />
    </>
  );
};

export default Home;
