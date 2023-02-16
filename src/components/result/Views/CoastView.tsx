import styled from '@emotion/styled';
import { ICoastProps } from '@src/types/result';
import Image from 'next/image';
import React from 'react';

const CoastView = ({ coastalImage, descriptions }: ICoastProps) => {
  return (
    <StCoast>
      <StBody>
        <StCoastImage>
          <Image src={coastalImage} alt="해안 이미지" fill />
        </StCoastImage>
        <StDescriptionBox>
          {descriptions.map((description, idx) => (
            <StDescription key={idx}>{description}</StDescription>
          ))}
        </StDescriptionBox>
      </StBody>
    </StCoast>
  );
};

const StCoast = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  width: 100%;
`;

const StBody = styled.div`
  width: 100%;
`;

const StCoastImage = styled.div`
  position: relative;
  margin-bottom: 30px;
  width: 100%;
  height: 340px;
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

export default CoastView;
