import { useState } from 'react';
import { IClipboardProps } from '@src/types/result';
import ClipboardView from './Views/ClipboardView';

const Clipboard = () => {
  const [copyUrl, setCopyUrl] = useState<boolean>(false);

  const ClipboardProps: IClipboardProps = {
    copyUrl,
    serviceUrl: 'https://mytamla.netlify.app',
    handleCopyClipBoard: () => {
      setCopyUrl(true);

      return navigator.clipboard.writeText('https://mytamla.netlify.app');
    },
  };

  return <ClipboardView {...ClipboardProps} />;
};

export default Clipboard;
