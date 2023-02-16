/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { IResult, IResultProps } from '@src/types/result';
import ResultAPI from '@src/api/result';
import SEO from '@src/components/common/SEO';
import ResultView from '@src/components/result/Views/ResultView';

export async function getServerSideProps(context: any) {
  const coast = context.params.coast;

  const response = await ResultAPI.getResult(coast);

  return {
    props: {
      result: response,
    },
  };
}

const Result = ({ result }: IResult) => {
  const [openModal, setOpenModal] = useState<boolean>(true);

  const [present, future] = result;

  const ResultProps: IResultProps = {
    openModal,
    setOpenModal,
    present,
    future,
  };

  return (
    <>
      <SEO title="결과 페이지" />
      <ResultView {...ResultProps} />
    </>
  );
};

export default Result;
