import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';
import '../section/projects.css';
import Modal from './modal.jsx';
import '../section/modal.css';

function App() {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState({});
  const [selectedSlide, setSelectedSlide] = useState('c1'); // State to manage the selected slide

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
        
        <div className="wrapper_projet_label">
          <div className="container_projet_label">
            <input type="radio" name="slide" id="c1" checked={selectedSlide === 'c1'} onChange={() => setSelectedSlide('c1')} />
            <label htmlFor="c1" className="card">
              <div className="row">
                <div className="icon">1</div>
                <div className="description">
                  <h4>{t('projet_1')}</h4>
                  <div class="button_container_project">
                    <button className="text_button_project" onClick={() => handleOpenModal('1')}>{t('projet_des_plus')}</button>
                  </div>                </div>
              </div>
            </label>

            <input type="radio" name="slide" id="c2" checked={selectedSlide === 'c2'} onChange={() => setSelectedSlide('c2')} />
            <label htmlFor="c2" className="card">
              <div className="row">
                <div className="icon">2</div>
                <div className="description">
                  <h4>{t('projet_2')}</h4>
                  <div class="button_container_project">
                    <button className="text_button_project" onClick={() => handleOpenModal('2')}>{t('projet_des_plus')}</button>
                  </div>                </div>
              </div>
            </label>

            <input type="radio" name="slide" id="c3" checked={selectedSlide === 'c3'} onChange={() => setSelectedSlide('c3')} />
            <label htmlFor="c3" className="card">
              <div className="row">
                <div className="icon">3</div>
                <div className="description">
                  <h4>{t('projet_3')}</h4>
                  <div class="button_container_project">
                    <button className="text_button_project" onClick={() => handleOpenModal('3')}>{t('projet_des_plus')}</button>
                  </div>                </div>
              </div>
            </label>

            <input type="radio" name="slide" id="c4" checked={selectedSlide === 'c4'} onChange={() => setSelectedSlide('c4')} />
            <label htmlFor="c4" className="card">
              <div className="row">
                <div className="icon">4</div>
                <div className="description">
                  <h4>{t('projet_4')}</h4>
                  <div class="button_container_project">
                    <button className="text_button_project" onClick={() => handleOpenModal('4')}>{t('projet_des_plus')}</button>
                  </div>
                </div>
              </div>
            </label>
          </div>
        </div>
        {/*<button className="buttonskills">{t('skills_button')}</button>*/}
      </section>

      {Object.keys(showModal).map((projectKey) => (
        showModal[projectKey] && (
          <Modal key={projectKey} show={showModal[projectKey]} handleClose={() => handleCloseModal(projectKey)}>
            <div className="modal-inner-content">
              <h2 className="modal-title">{t(`projet_${projectKey}`)}</h2>
              <p className="modal-description">{t(`projet_des_${projectKey}`)}</p>
            </div>
          </Modal>
        )
      ))}
    </>
  );
}

export default App;
