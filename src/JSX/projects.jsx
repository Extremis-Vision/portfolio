import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';
import '../section/projects.css';
import Modal from './modal.jsx';
import '../section/modal.css';

function App() {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState({}); // Store the modal visibility state for each project

  const handleOpenModal = (project) => {
    setShowModal({ ...showModal, [project]: true });
  };

  const handleCloseModal = (project) => {
    setShowModal({ ...showModal, [project]: false });
  };

  return (
    <>
      <section id="projects">
        <h1>{t('projets')}</h1>
        <div className="container2">
          <div className="row">
            <button
              className="boxa boxa1 projet1"
              onClick={() => handleOpenModal('projet1')}
            ></button>
            <button
              className="boxa boxa2 projet2"
              onClick={() => handleOpenModal('projet2')}
            ></button>
            <button
              className="boxa boxa1 projet3"
              onClick={() => handleOpenModal('projet3')}
            ></button>
          </div>
          <div className="row">
            <button
              className="boxa boxa2 projet4"
              onClick={() => handleOpenModal('projet4')}
            ></button>
            <button
              className="boxa boxa1 projet5"
              onClick={() => handleOpenModal('projet5')}
            ></button>
            <button
              className="boxa boxa1 projet6"
              onClick={() => handleOpenModal('projet6')}
            ></button>
          </div>
        </div>
        <button className="buttonskills">{t('skills_button')}</button>
      </section>

      {/* Modal for Projet 1 */}
      {showModal.projet1 && (
        <Modal show={showModal.projet1} handleClose={() => handleCloseModal('projet1')}>
          <div className="modal-inner-content">
            <h2 className="modal-title">{t('projet_1')}</h2>
            <p className="modal-description">{t('projet_des_1')}</p>
          </div>
        </Modal>
      )}

      {/* Modal for Projet 2 */}
      {showModal.projet2 && (
        <Modal show={showModal.projet2} handleClose={() => handleCloseModal('projet2')}>
          <div className="modal-inner-content">
            <h2 className="modal-title">{t('projet_2')}</h2>
            <p className="modal-description">{t('projet_des_2')}</p>
            {/* Add any other specific content for Projet 2 */}
          </div>
        </Modal>
      )}

      {/* Modal for Projet 3 */}
      {showModal.projet3 && (
        <Modal show={showModal.projet3} handleClose={() => handleCloseModal('projet3')}>
          <div className="modal-inner-content">
            <h2 className="modal-title">{t('projet_3')}</h2>
            <p className="modal-description">{t('projet_des_3')}</p>
            {/* Add any other specific content for Projet 3 */}
          </div>
        </Modal>
      )}

      {/* Add more modals for other projects as needed */}
      {/* Example for Projet 4 */}
      {showModal.projet4 && (
        <Modal show={showModal.projet4} handleClose={() => handleCloseModal('projet4')}>
          <div className="modal-inner-content">
            <h2 className="modal-title">{t('projet_4')}</h2>
            <p className="modal-description">{t('projet_des_4')}</p>
            {/* Add any other specific content for Projet 4 */}
          </div>
        </Modal>
      )}

      {showModal.projet5 && (
        <Modal show={showModal.projet5} handleClose={() => handleCloseModal('projet5')}>
          <div className="modal-inner-content">
            <h2 className="modal-title">{t('projet_5')}</h2>
            <p className="modal-description">{t('projet_des_5')}</p>
            {/* Add any other specific content for Projet 3 */}
          </div>
        </Modal>
      )}

      {/* Add more modals for other projects as needed */}
      {/* Example for Projet 4 */}
      {showModal.projet6 && (
        <Modal show={showModal.projet6} handleClose={() => handleCloseModal('projet6')}>
          <div className="modal-inner-content">
            <h2 className="modal-title">{t('projet_6')}</h2>
            <p className="modal-description">{t('projet_des_6')}</p>
            {/* Add any other specific content for Projet 4 */}
          </div>
        </Modal>
      )}

      {/* Repeat the above structure for Projet 5 and Projet 6 */}
    </>
  );
}

export default App;
