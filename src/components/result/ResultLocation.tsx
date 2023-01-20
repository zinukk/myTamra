import styled from '@emotion/styled';
import React from 'react';
import Headline from '../common/Headline';
import LocationIcon from '../../../public/assets/icons/icons_location.png';
import Image from 'next/image';

interface IProps {
  location: string;
  locationImage: string;
}

const ResultLocation = ({ location, locationImage }: IProps) => {
  return (
    <StResultLocation>
      <StHeader>
        <Headline text="내가 있는 위치는?" />
        <StLocation>
          <Image src={LocationIcon} alt="위치아이콘" width={15} height={20} />
          <StLocationText>{location}</StLocationText>
        </StLocation>
      </StHeader>
      <StBody>
        <Image src={locationImage} alt="해안위치" width={100} height={100} />
      </StBody>
    </StResultLocation>
  );
};

const StResultLocation = styled.div`
  padding: 20px;
  width: 100%;
`;

const StHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StLocation = styled.div`
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
  width: 100%;
`;

export default ResultLocation;
