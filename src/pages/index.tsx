import { useRouter } from 'next/router';
import { IHomeProps } from '@src/types/home';
import SEO from '@src/components/common/SEO';
import HomeView from '@src/components/home/HomeView';

const Home = () => {
  const router = useRouter();

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
