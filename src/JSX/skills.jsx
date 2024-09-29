import React from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n'; // Assurez-vous que ce fichier est configuré comme indiqué dans les étapes précédentes
import '../section/competences.css';

function App() {
    const { t } = useTranslation(); // Utilisation de useTranslation pour accéder à la fonction de traduction

    return (
<section id="skills">
  <h1>{t('competences')}</h1>
  <div className="container1">
    <button id="python" className="box">
      <span className="icon-name">Python</span>
    </button>
    <button id="C" className="box">
      <span className="icon-name">C</span>
    </button>
    <button id="html" className="box">
      <span className="icon-name">HTML</span>
    </button>
    <button id="css" className="box">
      <span className="icon-name">CSS</span>
    </button>
  </div>
  <div className="container1">
    <button id="react" className="box">
      <span className="icon-name">React</span>
    </button>
    <button id="php" className="box">
      <span className="icon-name">PHP</span>
    </button>
    <button id="fusion" className="box">
      <span className="icon-names">3D design</span>
    </button>
    <button id="troi" className="box">
      <span className="icon-names">3D Printing</span>
    </button>
  </div>
  <button className="buttonskill">{t('skills_button')}</button>
</section>

    );
}

export default App;