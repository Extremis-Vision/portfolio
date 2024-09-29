import React from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n'; // Assurez-vous que ce fichier est configuré comme indiqué dans les étapes précédentes
import '../section/experience.css';
import renaultimage from '../assets/Renault.png';
import constelliumimage from '../assets/Constellium.png';
import utbmimage from '../assets/Utbm.png';

function App() {
    const { t } = useTranslation(); // Utilisation de useTranslation pour accéder à la fonction de traduction

    return (
            <section className='education' id="education">
                <h1>{t('experience')}</h1>
                <div class="timeline">
                    <div class="container_exp left-container_exp ">
                        <div className="renault">
                            <img src={renaultimage} alt="Renault"/>
                        </div>
                        <div class="text-box">
                            <h2>{t('exp_stage_3')}</h2>
                            <small>2018 - 2019</small>
                            <p>{t('exp_stage_3_desc')}</p>
                            <span class="left-container-arrow"></span>
                        </div>
                    </div>
                    <div class="container_exp  right-container_exp ">
                        <img class="constellium" src={constelliumimage} alt="Constellium"/>
                        <div class="text-box">
                            <h2>{t('exp_stage_ing')}</h2>
                            <small>2024</small>
                            <p>{t('exp_stage_ing_desc')}</p>
                            <span class="right-container-arrow"></span>
                        </div>
                    </div>
                    <div class="container_exp  left-container_exp ">
                        <img class="utbm" src={utbmimage} alt="UTBM"/>
                        <div class="text-box">
                            <h2>{t('exp_ecole')}</h2>
                            <small>2023 - ?</small>
                            <p>{t('exp_ecole_desc')}</p>
                            <span class="left-container-arrow"></span>
                        </div>
                    </div>
                </div>   
            </section>
    );
}

export default App;
