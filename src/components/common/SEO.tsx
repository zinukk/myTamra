import Head from 'next/head';

interface SEOProps {
  title: string;
}

const SEO = (props: SEOProps) => {
  const { title } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="나의 탐라" />
      <meta property="og:title" content="나의 제주 모습은? 나의 탐라" />
      <meta property="og:description" content="나의 제주를 알아보고 공유해보세요" />
      <meta
        property="og:image"
        content="https://user-images.githubusercontent.com/103626175/208021963-bfab53da-8c2c-4530-9bc4-16ba2f0788fa.png"
      />
      <meta property="og:locale" content="ko_KR" />
    </Head>
  );
};

export default SEO;
