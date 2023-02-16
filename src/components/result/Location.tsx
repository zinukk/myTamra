import styled from '@emotion/styled';
import Image from 'next/image';
import Headline from '../common/Headline';
import LocationIcon from '../../../public/assets/icons/icons_location.png';

interface IProps {
  location: string;
  locationImage: string;
}

const Location = ({ location, locationImage }: IProps) => {
  return (
    <StLocation>
      <StHeader>
        <Headline text="내가 있는 위치는?" />
        <StLocationInfo>
          <Image src={LocationIcon} alt="위치아이콘" width={15} height={20} />
          <StLocationText>{location}</StLocationText>
        </StLocationInfo>
      </StHeader>
      <StBody>
        <Image src={locationImage} alt="해안위치" fill />
      </StBody>
    </StLocation>
  );
};

const StLocation = styled.div`
  padding: 20px;
  width: 100%;
`;

const StHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StLocationInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  width: 100%;
`;

const StLocationText = styled.p`
  margin-left: 10px;
  color: ${({ theme }) => theme.color.gray500};
  font-size: 15px;
`;

const StBody = styled.div`
  position: relative;
  margin: 40px auto;
  width: 270px;
  height: 140px;
`;

export default Location;
