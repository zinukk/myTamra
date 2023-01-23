import styled from '@emotion/styled';
import { convertDate } from '@src/utils/convertDate';
import CircleImg from '../../../public/assets/images/image_circle.png';
import React from 'react';
import Image from 'next/image';
import Coast from './Coast';
import Location from './Location';
import Creature from './Creature';
import Place from './Place';
import Reason from './Reason';
import Campaign from './Campaign';
import Fit from './Fit';
import Clipboard from './Clipboard';
import KakaoShare from './KakaoShare';

interface IProps {
  result: Result;
}

const ResultList = ({ result }: IProps) => {
  const {
    dateType,
    coastalName,
    coastalImage,
    coastalContent,
    location,
    locationImage,
    holdingCreature,
    place,
    enemy,
    enemyName,
    friend,
    friendName,
  } = result;

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
        <Coast coastalImage={coastalImage} coastalContent={coastalContent} />
        <Location location={location} locationImage={locationImage} />
        <Creature holdingCreature={holdingCreature} />
        <Place dateType={dateType} place={place} />
        {dateType !== 'today' && (
          <>
            <Reason />
            <Campaign place={place} />
          </>
        )}
        <Fit enemy={enemy} enemyName={enemyName} friend={friend} friendName={friendName} />
      </StBody>
      <StFooter>
        <Clipboard />
        <KakaoShare />
      </StFooter>
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

const StFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px;
  width: 100%;
`;

export default ResultList;
