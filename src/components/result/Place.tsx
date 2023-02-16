import { IPlace } from '@src/types/result';
import { useRouter } from 'next/router';
import PlaceView from './Views/PlaceView';

interface IProps {
  dateType: string;
  place: IPlace[];
}

const Place = ({ dateType, place }: IProps) => {
  const router = useRouter();

  const PlaceProps = {
    dateType,
    place,
    pageHandler: (url: string) => {
      return router.push(url);
    },
  };

  return <PlaceView {...PlaceProps} />;
};

export default Place;
