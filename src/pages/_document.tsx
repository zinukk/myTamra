import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <script defer src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
