import { IFit, IFitProps } from '@src/types/result';
import FitView from './Views/FitView';

const Fit = ({ enemy, enemyName, friend, friendName }: IFit) => {
  const CONTENTS = [
    { id: 0, image: friend, name: friendName, type: '잘 맞는 친구' },
    { id: 1, image: enemy, name: enemyName, type: '안 맞는 친구' },
  ];

  const FitProps: IFitProps = {
    CONTENTS,
  };

  return <FitView {...FitProps} />;
};

export default Fit;
