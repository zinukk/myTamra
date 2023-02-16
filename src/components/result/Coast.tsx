import { ICoastProps } from '@src/types/result';
import React from 'react';
import CoastView from './Views/CoastView';

interface IProps {
  coastalImage: string;
  coastalContent: string;
}

const Coast = ({ coastalImage, coastalContent }: IProps) => {
  const CoastProps: ICoastProps = {
    coastalImage,
    descriptions: coastalContent.split('\n'),
  };

  return <CoastView {...CoastProps} />;
};

export default Coast;
