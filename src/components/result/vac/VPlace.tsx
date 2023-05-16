import styled from '@emotion/styled';
import Image from 'next/image';
import Headline from '../../common/Headline';
import TimeIcon from '/public/assets/icons/icon_time.png';
import LocationIcon from '/public/assets/icons/icon_storeLocation.png';
import { IPlaceProps } from '@src/types/result';

const VPlace = ({ future, place, pageHandler }: IPlaceProps) => {
  return (
    <StPlace>
      <StHeader>
        <Headline text="주변에 이런 곳은 어때요?" />
      </StHeader>
      <StBody>
        {!future ? (
          place.map(({ image, url, name, time, location }, idx: number) => (
            <StPlaceBox
              key={idx}
              onClick={() => {
                pageHandler(url);
              }}>
              <Image src={image} alt="관광이미지" width={120} height={94} style={{ borderRadius: '10px' }} />
              <StPlaceInfo>
                <StPlaceName>{name}</StPlaceName>
                <StLocation>
                  <Image src={LocationIcon} alt="위치아이콘" width={12} height={16} />
                  <StLocationText>{location}</StLocationText>
                </StLocation>
                <StTime>
                  <Image src={TimeIcon} alt="시간아이콘" width={13} height={13} />
                  <StTimeText>{time}</StTimeText>
                </StTime>
              </StPlaceInfo>
            </StPlaceBox>
          ))
        ) : (
          <StGray>서비스 지역이 아닙니다.</StGray>
        )}
      </StBody>
    </StPlace>
  );
};

const StPlace = styled.div`
  margin-top: 20px;
  padding: 20px;
  width: 100%;
`;

const StHeader = styled.header`
  width: 100%;
`;

const StBody = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  width: 100%;
`;

const StPlaceBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  padding: 10px;
  width: 100%;
  background: ${({ theme }) => theme.color.whiteColor};
  border-radius: 10px;
`;

const StPlaceInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  width: 100%;
`;

const StPlaceName = styled.p`
  font-size: 19px;
  font-weight: 600;
`;

const StLocation = styled.div`
  display: flex;
  align-items: center;
  margin: 7px 0;
  width: 100%;
`;

const StLocationText = styled.p`
  margin-left: 5px;
  font-size: 14px;
`;

const StTime = styled(StLocation)`
  margin: 0;
`;

const StTimeText = styled(StLocationText)`
  padding-top: 1px;
`;

const StGray = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.color.gray500};
  font-size: 15px;
`;

export default VPlace;
