import styled from '@emotion/styled';
import { IClipboardProps } from '@src/types/result';
import React from 'react';

const ClipboardView = ({ serviceUrl, copyUrl, handleCopyClipBoard }: IClipboardProps) => {
  return (
    <StClipboard>
      <StUrl>{serviceUrl}</StUrl>
      <StCopyBtn isCopied={copyUrl} onClick={handleCopyClipBoard}>
        복사
      </StCopyBtn>
    </StClipboard>
  );
};

const StClipboard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.color.gray400};
  border: 1px solid black;
  border-radius: 15px;
`;

const StUrl = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  width: 80%;
  height: 55px;
`;

const StCopyBtn = styled.button<{ isCopied: boolean }>`
  width: 20%;
  height: 55px;
  color: ${({ theme, isCopied }) => (isCopied ? theme.color.backgroundColor : theme.color.whiteColor)};
  background: ${({ theme, isCopied }) => (isCopied ? theme.color.mainColor : theme.color.gray500)};
  border: none;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  font-size: 16px;
`;

export default ClipboardView;
