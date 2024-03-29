import { useEffect } from 'react';
import { IKakaoShareProps } from '@src/types/result';
import KakaoShareView from './vac/VKakaoShare';

const KakaoShare = () => {
  useEffect(() => {
    const { Kakao } = window;
    if (!Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    }
  }, []);

  const KakaoShareProps: IKakaoShareProps = {
    share: () => {
      const { Kakao } = window;
      return Kakao.Link.sendScrap({
        requestUrl: 'https://zinukk.shop',
      });
    },
  };

  return <KakaoShareView {...KakaoShareProps} />;
};

export default KakaoShare;
