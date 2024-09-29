import React from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n'; // Assurez-vous que ce fichier est configuré comme indiqué dans les étapes précédentes
import '../section/footer.css';
import '../section/competences.css';

function App() {
    const { t } = useTranslation(); // Utilisation de useTranslation pour accéder à la fonction de traduction

    return (
        <footer>
            <div className="social-links">
                <p>&copy; 2024 Léonard Goetz. Tous droits réservés.</p>
            </div>
        </footer>
    );
}

export default App;
