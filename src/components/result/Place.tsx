import { useRouter } from 'next/router';
import { IPlace } from '@src/types/result';
import PlaceView from './vac/VPlace';

interface IProps {
  future: boolean;
  place: IPlace[];
}

const Place = ({ future, place }: IProps) => {
  const router = useRouter();

  const PlaceProps = {
    future,
    place,
    pageHandler: (url: string) => {
      return router.push(url);
    },
  };

  return <PlaceView {...PlaceProps} />;
};

export default Place;
