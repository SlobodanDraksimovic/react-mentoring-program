import React from 'react';
import ModalContainer from './ModalContainer/ModalContainer';
import ModalHeader from './ModalHeader/ModalHeader';

type Props = {
  title: string;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ title, onClose, children }) => (
  <ModalContainer>
    <ModalHeader title={title} onClose={onClose} />
    {children}
  </ModalContainer>
);

export default Modal;
