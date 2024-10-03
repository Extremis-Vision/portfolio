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
                "accueil_paragraphe": "This is the English version of the site.",
                "skills_button": "See more",
                "exp_stage_3": "3rd Grade Internship",
                "exp_stage_3_desc": "I did my 3rd-grade internship at a Renault garage.",
                "exp_stage_ing": "Worker internship",
                "exp_stage_ing_desc": "I completed my mandatory internship at Constellium Biesheim as a layer weight operator.",
                "exp_ecole": "UTBM",
                "exp_ecole_desc": "I am currently enrolled at UTBM, aiming to become a computer engineer.",
                "contact_titre": "Thank you for your time",
                "contact_button": "Contact",
                "projet_1": "Jarvis",
                "projet_2": "Server",
                "projet_3": "3D Printing",
                "projet_4": "Recycling",
                "projet_des_1": "Jarvis is an intelligent voice assistant project. You may know Iron Man; it's the same idea. For now, it can read my agenda, read the news and summarize it, access my notes, give the weather, and perform simple actions on my computer (open the browser, file explorer, etc.).",
                "projet_des_2": "My server is the computer that hosts the site you are currently viewing. It also hosts Nextcloud (personal cloud), Bitwarden (password manager), Ollama (running AI models remotely, with Web UI as the interface). I also have two homemade containers to gather economic information and send it back to me. A website for this is in preparation. Additionally, I have two instances of OctoPrint to control my printers remotely. Stay tuned, and you'll understand.",
                "projet_des_3": "I've loved 3D printing for a long time, and I started when I was in middle school. I have two printers: a modified Ender 3, with the addition of a BLTouch, a motherboard and firmware change, an arm to remove prints and start the next ones, as well as a brass brush to automatically clean the printer. I also have an Anet A8 with a completely modified aluminum chassis; I had created a system to transform it into a CNC with a Dremel, and I did wood cuts with it. Now, it's equipped with a leveling sensor, a new motherboard, and a new extruder. I took the opportunity to install OctoPrint on my server with two instances, allowing me to print continuously with my Ender 3 thanks to the AutoRemover.",
                "projet_des_4": "I titled this section 'recycling,' but it should be 'filament.' After throwing away bottles and to save money, I started looking for a solution. I knew that caps were recycled, and it was natural for me to turn to the body of the bottle. That's why I did some research and saw someone doing it. I wanted to do the same, so I created and used homemade printed filament.",
                "projet_des_plus": "See more"
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
            "exp_stage_3_desc": "J'ai effectué mon stage de 3 ème dans un garage renault." ,
            "exp_stage_ing": "Stage ouvrier",
            "exp_stage_ing_desc": "J'ai effectué mon stage ouvrier obligatoire chez Constellium Biesheim en tant qu'opérateur poid de couche.",
            "exp_ecole": "UTBM",
            "exp_ecole_desc": "Je suis actuellement scolarisé a l'UTBM, voulant devenir ingénieur en informatique.",
            "contact_titre": "Merci pour votre temps",
            "contact_button": "Contacter",
            "projet_1": "Jarvis",
            "projet_2": "Serveur",
            "projet_3": "Impression 3d",
            "projet_4": "Recyclage",
            "projet_des_1": "Jarvis est un projet d'assistant vocal intelligent. Vous connaissez peut-être Iron Man, eh bien c'est la même idée. Pour le moment, il est capable de me lire mon agenda, lire les actualités et faire un résumé, accéder à mes notes, donner la météo et réaliser des actions simples sur mon ordinateur (ouvrir le navigateur, l'explorateur de fichiers, etc.).",
            "projet_des_2": "Mon serveur est l'ordinateur qui héberge le site que vous voyez actuellement. Il héberge aussi Nextcloud (cloud personnel), Bitwarden (gestionnaire de mots de passe), Ollama (faire tourner des modèles d'IA à distance et Web UI comme interface). J'ai aussi deux conteneurs faits maison pour récupérer des informations économiques et me les renvoyer. Un site pour cela est en préparation. J'ai également deux instances d'OctoPrint pour contrôler mes imprimantes à distance. Regardez la suite, vous comprendrez.",
            "projet_des_3":"J'adore l'impression 3D depuis longtemps, et je m'y suis mis quand j'étais au collège. J'ai deux imprimantes : une Ender 3 modifiée, avec l'ajout d'un BLTouch, un changement de carte mère et de firmware, un bras pour retirer les impressions et commencer les suivantes, ainsi qu'une brosse en laiton pour nettoyer automatiquement l'imprimante. J'ai aussi une Anet A8 avec châssis en aluminium complètement modifié ; j'avais réalisé un système pour la transformer en CNC avec une Dremel, et j'ai fait des découpes de bois avec. Maintenant, elle est équipée d'un capteur de nivellement, d'une nouvelle carte mère et d'un nouvel extrudeur. J'en ai profité pour installer OctoPrint sur mon serveur avec deux instances, ce qui me permet d'imprimer en continu avec mon Ender 3 grâce à l'AutoRemover.",
            "projet_des_4": "J'ai intitulé cette partie 'recyclage', mais cela devrait être 'filament'. Après avoir jeté des bouteilles et pour économiser de l'argent, je me suis mis à la recherche d'une solution. Je savais que les bouchons étaient recyclés, et c'est tout naturellement que je me suis orienté vers le corps de la bouteille. C'est pourquoi j'ai effectué des recherches et j'ai vu une personne le faire. J'ai eu envie de faire la même chose et j'ai ainsi créé et utilisé du filament imprimé maison.",
            "projet_des_plus":"Voir plus"
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
            "accueil_paragraphe": "Dies ist die deutsche Version der Seite.",
            "skills_button": "Mehr sehen",
            "exp_stage_3": "Praktikum in der 3. Klasse",
            "exp_stage_3_desc": "Ich habe mein Praktikum in der 3. Klasse in einer Renault-Werkstatt gemacht.",
            "exp_stage_ing": "Fachpraktikum",
            "exp_stage_ing_desc": "Ich habe mein Pflichtpraktikum bei Constellium Biesheim als Gewichtsoperator in der Schicht gemacht.",
            "exp_ecole": "UTBM",
            "exp_ecole_desc": "Ich bin derzeit an der UTBM eingeschrieben und möchte Informatikingenieur werden.",
            "contact_titre": "Vielen Dank für Ihre Zeit",
            "contact_button": "Kontaktieren",
            "projet_1": "Jarvis",
            "projet_2": "Server",
            "projet_3": "3D-Druck",
            "projet_4": "Recycling",
            "projet_des_1": "Jarvis ist ein Projekt für einen intelligenten Sprachassistenten. Vielleicht kennen Sie Iron Man, es ist die gleiche Idee. Im Moment kann er meinen Kalender lesen, die Nachrichten lesen und zusammenfassen, auf meine Notizen zugreifen, das Wetter geben und einfache Aktionen auf meinem Computer ausführen (den Browser öffnen, den Datei-Explorer usw.).",
            "projet_des_2": "Mein Server ist der Computer, der die Website hostet, die Sie gerade sehen. Er hostet auch Nextcloud (persönliche Cloud), Bitwarden (Passwortmanager), Ollama (AI-Modelle remote ausführen, mit Web UI als Schnittstelle). Ich habe auch zwei selbstgemachte Container, um wirtschaftliche Informationen zu sammeln und sie mir zurückzusenden. Eine Website dafür ist in Vorbereitung. Außerdem habe ich zwei Instanzen von OctoPrint, um meine Drucker aus der Ferne zu steuern. Bleiben Sie dran, und Sie werden verstehen.",
            "projet_des_3": "Ich liebe den 3D-Druck seit langem und habe damit angefangen, als ich in der Schule war. Ich habe zwei Drucker: einen modifizierten Ender 3, mit dem Hinzufügen eines BLTouch, einer neuen Hauptplatine und Firmware, einem Arm zum Entfernen von Drucken und zum Starten der nächsten, sowie einer Messingbürste, um den Drucker automatisch zu reinigen. Ich habe auch einen Anet A8 mit einem vollständig modifizierten Aluminiumrahmen; ich hatte ein System erstellt, um ihn in eine CNC mit einer Dremel zu verwandeln, und ich habe damit Holz geschnitten. Jetzt ist er mit einem Nivellierungssensor, einer neuen Hauptplatine und einem neuen Extruder ausgestattet. Ich habe die Gelegenheit genutzt, OctoPrint auf meinem Server mit zwei Instanzen zu installieren, was mir ermöglicht, kontinuierlich mit meinem Ender 3 zu drucken, dank des AutoRemovers.",
            "projet_des_4": "Ich habe diesen Abschnitt 'Recycling' genannt, aber es sollte 'Filament' sein. Nachdem ich Flaschen weggeworfen hatte, um Geld zu sparen, machte ich mich auf die Suche nach einer Lösung. Ich wusste, dass die Verschlüsse recycelt wurden, und es war nur natürlich, dass ich mich dem Körper der Flasche zuwandte. Deshalb habe ich Recherchen durchgeführt und gesehen, dass jemand das tat. Ich wollte das Gleiche tun und habe so filament aus selbstgedrucktem Material hergestellt.",
            "projet_des_plus": "Mehr sehen"        
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
