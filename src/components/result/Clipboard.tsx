import { IClipboardProps } from '@src/types/result';
import React, { useState } from 'react';
import ClipboardView from './Views/ClipboardView';

const Clipboard = () => {
  const [copyUrl, setCopyUrl] = useState<boolean>(false);

  const ClipboardProps: IClipboardProps = {
    copyUrl,
    serviceUrl: 'https://zinukk.shop',
    handleCopyClipBoard: () => {
      setCopyUrl(true);

      return navigator.clipboard.writeText('https://zinukk.shop');
    },
  };

  return <ClipboardView {...ClipboardProps} />;
};

export default Clipboard;
