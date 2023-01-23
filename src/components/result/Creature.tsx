import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import Headline from '../common/Headline';
import CreatureImg from '/public/assets/images/image_creature.png';
import Protected from '/public/assets/svgs/svg_protected.svg';
import Disturbed from '/public/assets/svgs/svg_disturbed.svg';

interface IProps {
  holdingCreature: Creature[];
}

const Creature = ({ holdingCreature }: IProps) => {
  return (
    <StCreature>
      <StHeader>
        <Headline text="내가 가진 생물은?" />
      </StHeader>
      <StBody isOne={holdingCreature.length < 3}>
        {holdingCreature.map(({ image, name, kind }: Creature, idx: number) => (
          <StCreatureInfo key={idx}>
            <Image src={image} alt="생물이미지" width={116} height={116} />
            <StName>{name}</StName>
            <StKindBox>
              {kind === '보호종' ? <Protected alt="보호종" /> : <Disturbed alt="교란종" />}
              <StKind isProtected={kind === '보호종'}>{kind}</StKind>
            </StKindBox>
          </StCreatureInfo>
        ))}
      </StBody>
    </StCreature>
  );
};

const StCreature = styled.div`
  padding: 20px;
  width: 100%;
`;

const StHeader = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

const StBody = styled.div<{ isOne: boolean }>`
  display: flex;
  justify-content: flex-start;
  /* justify-content: ${({ isOne }) => (isOne ? 'flex-start' : 'space-between')}; */
  align-items: center;
  width: 100%;
`;

const StCreatureInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 33%;
`;

const StName = styled.p`
  margin-bottom: 7px;
  color: ${({ theme }) => theme.color.gray500};
  font-size: 15px;
`;

const StKindBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StKind = styled.p<{ isProtected: boolean }>`
  margin-top: 2px;
  margin-left: 5px;
  color: ${({ theme, isProtected }) => (isProtected ? theme.color.mainColor : theme.color.redColor)};
  font-size: 15px;
`;

export default Creature;
