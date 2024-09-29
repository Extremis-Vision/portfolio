// main.jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './JSX/home.jsx';
import Dtest from './JSX/3dtest.jsx';
import Skills from './JSX/skills.jsx';
import Projects from './JSX/projects.jsx';
import Exp from './JSX/exp.jsx';
import Footer from './JSX/footer.jsx';
import Loading from './JSX/loading.jsx'; // Importer le composant de chargement
import Contact from './JSX/contact.jsx';

const Main = () => {
  const [loading, setLoading] = useState(true);

  // Simuler un chargement de 3 secondes avant d'afficher le contenu
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Remplacer par la durée de chargement réelle si nécessaire

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.StrictMode>
      {loading ? (
        <Loading />
      ) : (
        <>
          <App />
          <Dtest />
          <Skills />
          <Projects />
          <Exp />
          <Contact />
          <Footer />
        </>
      )}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
