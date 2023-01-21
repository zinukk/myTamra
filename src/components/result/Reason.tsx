import styled from '@emotion/styled';
import React from 'react';
import Headline from '../common/Headline';

const Reason = () => {
  return (
    <StReason>
      <StHeader>
        <Headline text="왜 이렇게 되었을까요?" />
      </StHeader>
      <StBody>
        <StText>
          온실가스 배출이 늘어나면서 수온이 상승해
          <br />
          토종 생물들이 더 이상 살 수 없게 되었어요.
          <br />
          해수면 상승이 가속화되어 제주가 빠르게 잠겼어요.
          <br />
          해양쓰레기가 늘어나면서 생물들이 살기 어려운 환경이 되어갔어요. 우리가 가고 싶은 제주는 이렇게 사라질 거예요,
          <br />
          당신의 행동이 없다면요.
        </StText>
      </StBody>
    </StReason>
  );
};

const StReason = styled.div`
  padding: 20px;
  width: 100%;
`;

const StHeader = styled.div`
  width: 100%;
`;

const StBody = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const StText = styled.p`
  color: ${({ theme }) => theme.color.gray500};
  font-size: 15px;
  line-height: 26px;
  word-break: keep-all;
`;

export default Reason;
