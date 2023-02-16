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
        content="https://user-images.githubusercontent.com/97172321/219431038-2bb12055-5cb9-4712-849b-aa3a1ed366d0.png"
      />
      <meta property="og:locale" content="ko_KR" />
    </Head>
  );
};

export default SEO;
