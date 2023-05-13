import { ICoastProps } from '@src/types/result';
import CoastView from './vac/VCoast';

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
