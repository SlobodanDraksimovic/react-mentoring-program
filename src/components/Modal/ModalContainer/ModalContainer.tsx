import React from 'react';

import './ModalContainer.css';

type Props = {
  children: React.ReactNode
};

const ModalContainer: React.FC<Props> = ({ children }) => (
  <>
    <div className="backdrop" />
    <div className="modal-container">
      {children}
    </div>
  </>
);

export default ModalContainer;
