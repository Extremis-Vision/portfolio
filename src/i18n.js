// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "accueil": "Home",
            "competences": "Skills",
            "projets": "Projects",
            "experience": "Experience",
            "contact": "Contact",
            "accueil_titre": "Welcome",
            "accueil_paragraphe": "This is the English version of the website.",
            "skills_button": "See more",
            "exp_stage_3": "9th Grade Internship",
            "exp_stage_ing": "Engineer Trainee Internship",
            "contact_titre": "Thanks for your time",
            "contact_button": "To contact",
            "projet_1": "Jarvis",
            "projet_2": "Projet",
            "projet_3": "Projet",
            "projet_4": "Projet",
            "projet_5": "Projet",
            "projet_6": "Projet",
            "projet_des_1": "Projet",
            "projet_des_2":"Projet",
            "projet_des_3":"Projet",
            "projet_des_4":"Projet",
            "projet_des_5":"Projet",
            "projet_des_6": "Projet"
        }
    },
    fr: {
        translation: {
            "accueil": "Accueil",
            "competences": "Compétences",
            "projets": "Projets",
            "experience": "Expérience",
            "contact": "Contact",
            "accueil_titre": "Bienvenue",
            "accueil_paragraphe": "Voici la version française du site.",
            "skills_button": "Voir plus",
            "exp_stage_3": "Stage de 3ème",
            "exp_stage_3_desc": "J'ai effectuer mon stage de 3 ème dans un garage renault." ,
            "exp_stage_ing": "Stage d'ingénieur",
            "exp_stage_ing_desc": "J'ai effectué mon stage ouvrier obligatoire chez Constellium",
            "exp_ecole": "UTBM",
            "exp_ecole_desc": "Je suis actuellement scolarisé a l'UTBM.",
            "contact_titre": "Merci pour votre temps",
            "contact_button": "Contacter",
            "projet_1": "Jarvis",
            "projet_2": "Projet",
            "projet_3": "Projet",
            "projet_4": "Projet",
            "projet_5": "Projet",
            "projet_6": "Projet",
            "projet_des_1": "Projet",
            "projet_des_2":"Projet",
            "projet_des_3":"Projet",
            "projet_des_4":"Projet",
            "projet_des_5":"Projet",
            "projet_des_6": "Projet"
        }
    },
    de: {
        translation: {
            "accueil": "Startseite",
            "competences": "Fähigkeiten",
            "projets": "Projekte",
            "experience": "Erfahrung",
            "contact": "Kontakt",
            "accueil_titre": "Willkommen",
            "accueil_paragraphe": "Dies ist die deutsche Version der Website.",
            "skills_button": "Mehr sehen",
            "exp_stage_3": "Praktikum in der 9. Klasse",
            "exp_stage_ing": "Ingenieurpraktikum",
            "contact_titre": "Danke für Ihre Zeit",
            "contact_button": "Kontaktieren",
            "projet_1": "Jarvis",
            "projet_2": "Projet",
            "projet_3": "Projet",
            "projet_4": "Projet",
            "projet_5": "Projet",
            "projet_6": "Projet",
            "projet_des_1": "Projet",
            "projet_des_2":"Projet",
            "projet_des_3":"Projet",
            "projet_des_4":"Projet",
            "projet_des_5":"Projet",
            "projet_des_6": "Projet"
        }
    }
};

// Détermine la langue du navigateur
const browserLanguage = navigator.language || navigator.userLanguage;
const savedLanguage = localStorage.getItem('language') || browserLanguage.split('-')[0];

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: savedLanguage, // Utilise la langue du navigateur ou la langue sauvegardée
        fallbackLng: 'fr',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
