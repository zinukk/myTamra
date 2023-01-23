import styled from '@emotion/styled';
import React, { useState } from 'react';

const Clipboard = () => {
  const [copyUrl, setCopyUrl] = useState<boolean>(false);

  const SERVICE_URL = 'http://localhost:3000/';

  const handleCopyClipBoard = () => {
    setCopyUrl(true);

    return navigator.clipboard.writeText(SERVICE_URL);
  };

  return (
    <StClipboard>
      <StUrl>{SERVICE_URL}</StUrl>
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
  border-radius: 10px;
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
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  font-size: 16px;
`;

export default Clipboard;
