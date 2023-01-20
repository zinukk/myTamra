import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import Headline from '../common/Headline';
import Creature from '/public/assets/images/image_creature.png';
import Protected from '/public/assets/svgs/svg_protected.svg';
import Disturbed from '/public/assets/svgs/svg_disturbed.svg';

interface IProps {
  holdingCreature: Creature[];
}

const ResultCreature = ({ holdingCreature }: IProps) => {
  return (
    <StResultCreature>
      <StHeader>
        <Headline text="내가 가진 생물은?" />
      </StHeader>
      <StBody>
        {holdingCreature.map(({ image, name, kind }: Creature, idx: number) => (
          <StCreature key={idx}>
            <Image src={Creature} alt="생물이미지" width={116} height={116} />
            <StName>{name}</StName>
            <StKindBox>
              {kind === '보호종' ? <Protected alt="보호종" /> : <Disturbed alt="교란종" />}
              <StKind isProtected={kind === '보호종'}>{kind}</StKind>
            </StKindBox>
          </StCreature>
        ))}
      </StBody>
    </StResultCreature>
  );
};

const StResultCreature = styled.div`
  padding: 20px;
  width: 100%;
`;

const StHeader = styled.div`
  width: 100%;
`;

const StBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StCreature = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
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

export default ResultCreature;
