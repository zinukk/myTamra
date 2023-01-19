import styled from '@emotion/styled';
import ResultAPI from '@src/api/result';
import Modal from '@src/components/common/Modal';
import { convertDate } from '@src/utils/convertDate';
import { useState } from 'react';
import { dehydrate, QueryClient } from 'react-query';

export const getServerSideProps = async (ctx: any) => {
  const coast = ctx.params.coast;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('resultState', async () => await ResultAPI.getResult(coast));

  return {
    props: {
      result: dehydrate(queryClient).queries[0].state.data,
    },
  };
};

const result = ({ result }: Result[]) => {
  const [openModal, setOpenModal] = useState<boolean>(true);

  const [present, future] = result;

  console.log(result);

  return <StResult isModalOpen={openModal}>{openModal && <Modal setOpenModal={setOpenModal} />}</StResult>;
};

const StResult = styled.div<{ isModalOpen: boolean }>`
  width: 100%;
  min-height: 100vh;
  height: ${({ isModalOpen }) => (isModalOpen ? '100vh' : null)};
  overflow: ${({ isModalOpen }) => (isModalOpen ? 'hidden' : null)};
  background: ${({ theme }) => theme.color.backgroundColor};
`;

export default result;
