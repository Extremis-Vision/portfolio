import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useSpring, animated } from '@react-spring/web';
import '../i18n';
import '../section/navbar.css';

function App() {
  const { t, i18n } = useTranslation();
  const [isActive, setIsActive] = useState(false);
  const [isLanguageMenuVisible, setIsLanguageMenuVisible] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [scrollY, setScrollY] = useState(0);
  const languageMenuRef = useRef(null); // Create a ref for the language menu

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setIsLanguageMenuVisible(false);
  };

  const handleLanguageMouseEnter = () => {
    setIsLanguageMenuVisible(true);
  };

  const handleLanguageMouseLeave = () => {
    setIsLanguageMenuVisible(false);
  };

  const handleLanguageMenuMouseEnter = () => {
    setIsLanguageMenuVisible(true);
  };

  const handleLanguageMenuMouseLeave = () => {
    setIsLanguageMenuVisible(false);
  };

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrentLanguage(lng);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const animationProps = useSpring({
    opacity: scrollY < 100 ? 1 : 0,
    transform: `translateY(${scrollY > 100 ? -scrollY / 2 : 0}px)`,
    config: { tension: 200, friction: 30 },
  });

  return (
    <div>
      <header>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav id="navbar" className={`nav-bar ${isActive ? 'active' : ''}`}>
          <ul className="nav-bar-back">
            <li>
              <a
                href=""
                className="link-back"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {t('accueil')}
              </a>
            </li>
            <li>
              <a
                href=""
                className="link-back"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('competences')}
              </a>
            </li>
            <li>
              <a
                href=""
                className="link-back"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('projets')}
              </a>
            </li>
            <li>
              <a
                href=""
                className="link-back"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('education').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('experience')}
              </a>
            </li>
            <li>
              <a
                href=""
                className="link-back"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('contact')}
              </a>
            </li>
          </ul>
        </nav>

        <div
          className="backlanguage"
          onMouseEnter={handleLanguageMouseEnter}
          onMouseLeave={handleLanguageMouseLeave}
        >
          <button className="language">{currentLanguage.toUpperCase()}</button>
          {isLanguageMenuVisible && (
            <div
              className="language-show"
              ref={languageMenuRef}
              onMouseEnter={handleLanguageMenuMouseEnter}
              onMouseLeave={handleLanguageMenuMouseLeave}
            >
              <ul>
                <li>
                  <button className="language_button" onClick={() => changeLanguage('en')}>
                    EN
                  </button>
                </li>
                <li>
                  <button className="language_button" onClick={() => changeLanguage('fr')}>
                    FR
                  </button>
                </li>
                <li>
                  <button className="language_button" onClick={() => changeLanguage('de')}>
                    DE
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
