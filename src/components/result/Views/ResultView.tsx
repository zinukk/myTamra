import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import { IResultProps } from '@src/types/result';
import ResultList from '../ResultList';
import Modal from '@src/components/common/Modal';

const ResultView = ({ openModal, setOpenModal, present, future }: IResultProps) => {
  return (
    <StResult isModalOpen={openModal}>
      <Swiper>
        <SwiperSlide>
          <ResultList result={present} />
        </SwiperSlide>
        <SwiperSlide>
          <ResultList result={future} />
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

export default ResultView;
