import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

interface IProps {
  enemy: string;
  enemyName: string;
  friend: string;
  friendName: string;
}

const Fit = ({ enemy, enemyName, friend, friendName }: IProps) => {
  const CONTENTS = [
    { id: 0, image: friend, name: friendName, type: '잘 맞는 친구' },
    { id: 1, image: enemy, name: enemyName, type: '안 맞는 친구' },
  ];

  return (
    <StFit>
      <StBody>
        {CONTENTS.map(({ id, image, name, type }) => (
          <StFitBox key={id}>
            <Image src={image} alt="해안 사진" width={167} height={115} style={{ borderRadius: '10px' }} />
            <StType>{type}</StType>
            <StName>{name}</StName>
          </StFitBox>
        ))}
      </StBody>
    </StFit>
  );
};

const StFit = styled.div`
  margin-top: 40px;
  width: 100%;
`;

const StBody = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const StFitBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const StName = styled.p`
  color: ${({ theme }) => theme.color.gray500};
  font-size: 16px;
`;

const StType = styled.p`
  margin: 10px 0;
  margin-top: 20px;
  color: ${({ theme }) => theme.color.whiteColor};
  font-size: 20px;
`;

export default Fit;
