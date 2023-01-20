import React, { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import SwipeImg from '../../../public/assets/images/image_modal.png';

interface IProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ setOpenModal }: IProps) => {
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <StModal>
      <StBody onClick={closeModal}>
        <Image src={SwipeImg} alt="스와이프 이미지" width={337} height={373} />
      </StBody>
    </StModal>
  );
};

const StModal = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const StBody = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  padding: 50px 0;
  width: 80vw;
  background: white;
  border-radius: 14px;
`;

export default Modal;
