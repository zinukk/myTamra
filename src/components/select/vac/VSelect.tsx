import styled from '@emotion/styled';
import { ISelectProps } from '@src/types/select';

const VSelect = ({ pages, pageIdx }: ISelectProps) => {
  return (
    <StSelect>
      <StHeader>가장 나다운 말을 선택해주세요</StHeader>
      <StBody>{pages[pageIdx]}</StBody>
    </StSelect>
  );
};

const StSelect = styled.div`
  position: relative;
  padding: 0 20px;
  padding-top: 20px;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.color.backgroundColor};
  overflow: scroll;
`;

const StHeader = styled.p`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  color: ${({ theme }) => theme.color.gray600};
  font-size: 16px;
`;

const StBody = styled.div`
  width: 100%;
`;

export default VSelect;
