import styled from '@emotion/styled';
import { convertDate } from '@src/utils/convertDate';
import CircleImg from '../../../public/assets/images/image_circle.png';
import React from 'react';
import Image from 'next/image';
import ResultCoast from './ResultCoast';
import ResultLocation from './ResultLocation';
import ResultCreature from './ResultCreature';
import ResultPlace from './ResultPlace';

const ResultList = () => {
  const dateType = 'today';
  const coastalName = '범섬';
  const coastalImage =
    'https://goormthon-sss-bucket.s3.ap-northeast-2.amazonaws.com/content/87736b17-a0ad-4a4c-877a-fe69b104a74b.png';
  const coastalContent =
    '저는 도전적인 제주, 범섬이에요. 멀리서 바라보면 큰 호랑이가 웅크리고 앉은 모습처럼 보인다 해서 범섬이라고 불려요. \n제주도를 만든 여신인 설문대 할망이 한라산을 베개 삼아 누우면서 두 발로 뚫어 제가 만들어졌답니다.\n저는  황금 보기를 돌같이 하라는 말로 유명한 최영 장군이 원나라 관리들(목호)의 반란을 제압하는 것도 봐왔어요.\n지금은 사람이 살고 있진 않지만, 낚시, 다이빙을 하는 사람들이 절 자주 보러 와서 외롭진 않아요.\n저와 제 물고기, 산호 친구들 보러 오실래요?';

  const location = '제주 서귀포시 법환동';
  const locationImage =
    'https://goormthon-sss-bucket.s3.ap-northeast-2.amazonaws.com/content/a64cfca2-8adc-47c3-b062-23366ae13b59.png';

  const holdingCreature = [
    { image: '', name: '선침거미불가사리', kind: '보호종' },
    { image: '', name: '선침거미불가사리', kind: '보호종' },
    { image: '', name: '선침거미불가사리', kind: '교란종' },
  ];

  const place = [
    {
      image:
        'https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20211111_294%2F1636615619411QWHLd_JPEG%2F9657B55B-F714-4EB3-8AD5-EC1DAF597A20.jpeg',
      url: 'https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20211111_294%2F1636615619411QWHLd_JPEG%2F9657B55B-F714-4EB3-8AD5-EC1DAF597A20.jpeg',
      name: '범섬 칼국수',
      location: '서귀포시 어쩌고',
      time: '10:00 ~ 22:00',
    },
    {
      image:
        'https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20211111_294%2F1636615619411QWHLd_JPEG%2F9657B55B-F714-4EB3-8AD5-EC1DAF597A20.jpeg',
      url: 'https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20211111_294%2F1636615619411QWHLd_JPEG%2F9657B55B-F714-4EB3-8AD5-EC1DAF597A20.jpeg',
      name: '더그랜드섬오름 본관',
      location: '서귀포시 어쩌고',
      time: '10:00 ~ 22:00',
    },
    {
      image:
        'https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20211111_294%2F1636615619411QWHLd_JPEG%2F9657B55B-F714-4EB3-8AD5-EC1DAF597A20.jpeg',
      url: 'https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20211111_294%2F1636615619411QWHLd_JPEG%2F9657B55B-F714-4EB3-8AD5-EC1DAF597A20.jpeg',
      name: '법환어촌계해녀체험센터',
      location: '서귀포시 어쩌고',
      time: '10:00 ~ 22:00',
    },
  ];

  const isToday = dateType === 'today';

  return (
    <StResultList>
      <StHeader>
        <StImgBox>
          <Image src={CircleImg} alt="원이미지" width={40} height={40} />
          <StLine dateType={dateType === 'today'} />
        </StImgBox>
        <StCoast>
          {dateType === 'today' ? '오늘의' : ' 미래의'} {coastalName}
        </StCoast>
        <StDate>{convertDate(dateType)}</StDate>
      </StHeader>
      <StBody>
        <ResultCoast coastalImage={coastalImage} coastalContent={coastalContent} />
        <ResultLocation location={location} locationImage={locationImage} />
        <ResultCreature holdingCreature={holdingCreature} />
        <ResultPlace dateType={dateType} place={place} />
      </StBody>
    </StResultList>
  );
};

const StResultList = styled.div`
  width: 100%;
  overflow: auto;
`;

const StHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 30px;
  width: 100%;
`;

const StImgBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StLine = styled.hr<{ dateType: boolean }>`
  position: absolute;
  top: 50%;
  right: ${({ dateType }) => dateType && '0%'};
  left: ${({ dateType }) => !dateType && '0%'};
  width: 50%;
  border: ${({ theme }) => `0.5px solid ${theme.color.mainColor}`};
`;

const StCoast = styled.p`
  margin: 10px 0;
  margin-top: 20px;
  color: ${({ theme }) => theme.color.gray600};
  font-size: 17px;
`;

const StDate = styled.p`
  color: ${({ theme }) => theme.color.whiteColor};
  font-size: 23px;
`;

const StBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export default ResultList;