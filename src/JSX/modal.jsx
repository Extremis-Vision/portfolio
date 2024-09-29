import React, { useEffect } from 'react';
import '../section/modal.css';

const Modal = ({ show, handleClose, children }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'; // Désactiver le défilement du body
    } else {
      document.body.style.overflow = 'auto'; // Réactiver le défilement du body
    }

    return () => {
      document.body.style.overflow = 'auto'; // Réactiver le défilement du body au démontage
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
