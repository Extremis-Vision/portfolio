# Utilise une image Node.js officielle basée sur une version légère
FROM node:18-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json dans le conteneur
COPY package*.json ./

# Installer les dépendances du projet
RUN npm install

# Copier le reste du code source de l'application
COPY . .

# Compiler l'application si nécessaire (par exemple, avec Vite)
RUN npm run build

# Exposer le port utilisé par l'application (par défaut 3000 pour Vite faire le déploiment sur le port)
EXPOSE 5173

# Commande pour démarrer l'application
CMD ["npm", "run", "dev"]
