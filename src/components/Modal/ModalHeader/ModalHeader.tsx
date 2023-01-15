import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import './ModalHeader.css';

type Props = {
  title: string;
  onClose: React.MouseEventHandler<HTMLButtonElement>
};

const ModalHeader: React.FC<Props> = ({ title, onClose }) => (
  <div className="modal-header-container">
    <button type="button" onClick={onClose} className="close-btn">
      <FontAwesomeIcon icon={faXmark} size="2xl" />
    </button>
    <h1 className="title">
      {title}
    </h1>
  </div>
);

export default ModalHeader;
