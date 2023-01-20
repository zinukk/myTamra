import styled from '@emotion/styled';
import ResultAPI from '@src/api/result';
import Modal from '@src/components/common/Modal';
import { useState } from 'react';
import { dehydrate, QueryClient } from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Navigation } from 'swiper';
import ResultList from '@src/components/result/ResultList';

// export async function getServerSideProps(context: any) {
//   const coast = context.params.coast;

//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery('resultState', async () => await ResultAPI.getResult(coast));

//   return {
//     props: {
//       result: dehydrate(queryClient).queries[0].state.data,
//     },
//   };
// }

const result = ({ result }: Result[]) => {
  const [openModal, setOpenModal] = useState<boolean>(true);

  // const [present, future] = result;

  SwiperCore.use([Navigation]);

  return (
    <StResult isModalOpen={openModal}>
      <Swiper>
        <SwiperSlide>
          <ResultList />
        </SwiperSlide>
        <SwiperSlide>
          <ResultList />
        </SwiperSlide>
      </Swiper>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </StResult>
  );
};

const StResult = styled.div<{ isModalOpen: boolean }>`
  width: 100%;
  min-height: 100vh;
  height: ${({ isModalOpen }) => (isModalOpen ? '100vh' : null)};
  overflow: ${({ isModalOpen }) => (isModalOpen ? 'hidden' : 'auto')};
  background: ${({ theme }) => theme.color.backgroundColor};
`;

export default result;
