import Head from 'next/head';

interface SEOProps {
  title: string;
}

const SEO = (props: SEOProps) => {
  const { title } = props;

  return (
    <Head>
      <title>나의 탐라 | {title}</title>
      <meta
        name="description"
        content="질문지를 통해 나의 성향에 맞는 제주 모습을 알아보고 현재와 미래의 모습을 확인해 보세요!"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="나의 탐라 : 나는 제주의 어떤 모습일까?" />
      <meta property="og:description" content="나는 제주의 어떤 모습일지 확인해보세요" />
      <meta property="og:url" content="https://zinukk.shop" />
      <meta property="og:locale" content="ko_KR" />
      <meta
        property="og:image"
        content="https://user-images.githubusercontent.com/97172321/219431038-2bb12055-5cb9-4712-849b-aa3a1ed366d0.png"
      />
    </Head>
  );
};

export default SEO;
