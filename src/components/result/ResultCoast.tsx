import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

interface IProps {
  coastalImage: string;
  coastalContent: string;
}

const ResultCoast = ({ coastalImage, coastalContent }: IProps) => {
  const descriptions = coastalContent.split('\n');
  console.log(descriptions);

  return (
    <StResultCoast>
      <StBody>
        <StCoastImage>{/* <Image src={coastalImage} alt="해안 이미지" width={100} height={100} /> */}</StCoastImage>
        <StDescriptionBox>
          {descriptions.map((description, idx) => (
            <StDescription key={idx}>{description}</StDescription>
          ))}
        </StDescriptionBox>
      </StBody>
    </StResultCoast>
  );
};

const StResultCoast = styled.div`
  margin-bottom: 40px;
  width: 100%;
`;

const StBody = styled.div`
  width: 100%;
`;

const StCoastImage = styled.div`
  margin-bottom: 30px;
  width: 100%;
`;

const StDescriptionBox = styled.div`
  padding: 0 20px;
  width: 100%;
`;

const StDescription = styled.p`
  color: ${({ theme }) => theme.color.gray500};
  font-size: 15px;
  line-height: 26px;
  word-break: keep-all;
`;

export default ResultCoast;
