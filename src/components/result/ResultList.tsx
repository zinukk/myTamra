import { Result } from '@src/types/result';
import ResultListView from './Views/ResultListView';

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

  const ResultListProps = {
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
  };

  return <ResultListView {...ResultListProps} />;
};

export default ResultList;
