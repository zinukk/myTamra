import { useRouter } from 'next/router';
import SEO from '@src/components/common/SEO';
import HomeView from '@src/components/home/HomeView';
import { IHomeProps } from '@src/types/home';

const Home = () => {
  const router = useRouter();

  const HomeProps: IHomeProps = {
    pageHandler: () => router.push('/select'),
  };

  return (
    <>
      <SEO title="나의 탐라" />
      <HomeView {...HomeProps} />
    </>
  );
};

export default Home;
