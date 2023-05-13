import styled from '@emotion/styled';
import Image from 'next/image';
import { IContent, IFitProps } from '@src/types/result';

const VFit = ({ CONTENTS }: IFitProps) => {
  return (
    <StFit>
      <StBody>
        {CONTENTS.map(({ id, image, name, type }: IContent) => (
          <StFitBox key={id}>
            <Image src={image} alt="해안 사진" width={160} height={115} style={{ borderRadius: '10px' }} />
            <StType>{type}</StType>
            <StName>{name}</StName>
          </StFitBox>
        ))}
      </StBody>
    </StFit>
  );
};

const StFit = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const StBody = styled.div`
  display: flex;
  justify-content: space-between;
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

export default VFit;
