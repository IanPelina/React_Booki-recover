<h1>Optimisation de l'application Booki</h1>

![image](/public/images/bookiReact.png)
## Optimisation de l'application Booki avec React, initialement créée avec HTML et CSS<br>
  . Création d'un backend  
  . Récupération des données via des calls API.<br>
  . Utilisation de composants réutilisables<br>
  . Utilisation de SCSS pour le style de l'application

## Fonctionnalités à venir:
  . Filtrages par catégories<br>
  . Filtrage par villes<br>
  . Ajout de cards/activités
  
## Lancer l'appli avec les commandes suivantes depuis le fichier racine:
  . npm run api<br>
  . npm start 
  
## Exemple d'optimisation: Section 'Hébergements'
## Avant (section hébergements => zones sélectionnées)
![image](/public/images/bookiAvant.png)
## Après 
### 1. Ici notre tableau du fichier accomodations.js (backend)
![image](/public/images/accomodations.js.png) 
### 2. Ici on récupère nos données côté front-end (Home.jsx)
![image](/public/images/callAccomodations.png)
### 3. Ici, on intègre notre composant 'Hébergement' dans 'Home.jsx' en lui disant de créer un composant pour chaque éléments de notre tableau
![image](/public/images/sectionOpti.png) 
### 4. Ici, le contenu de notre composant 'Hébergement'
![image](/public/images/hebergementApres.png)
