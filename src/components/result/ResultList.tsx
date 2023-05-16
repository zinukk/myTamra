import { Result } from '@src/types/result';
import { convertDate } from '@src/utils/convertDate';
import VResultList from './vac/VResultList';

interface IProps {
  result: Result;
}

const ResultList = ({ result }: IProps) => {
  const {
    dateType,
    coastalName,
    coastalImage,
    coastalContent,
    location,
    locationImage,
    holdingCreature,
    place,
    enemy,
    enemyName,
    friend,
    friendName,
  } = result;

  const time = dateType === 'today' ? '오늘의' : ' 미래의';

  const future = dateType !== 'today';

  const date = convertDate(dateType);

  const resultListProps = {
    time,
    future,
    date,
    coastalName,
    coastalImage,
    coastalContent,
    location,
    locationImage,
    holdingCreature,
    place,
    enemy,
    enemyName,
    friend,
    friendName,
  };

  return <VResultList {...resultListProps} />;
};

export default ResultList;
