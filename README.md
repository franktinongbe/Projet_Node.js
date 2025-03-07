# Projet_Node.js
Projet Node.js avec Express.js et Postman
*Fonctionnement de l'API
L'objectif principal du projet est de permettre des opérations comme l'affichage de toutes les tâches, l'accès à une tâche spécifique et potentiellement d'autres fonctionnalités. L'application utilise Express.js pour gérer les requêtes HTTP.
Liste de toutes les tâches : Route : GET /tasks
Cette route renvoie un tableau contenant les références des tâches disponibles.

Sélection d'une tâche spécifique :
Route : GET /tasks/:id 
Cette route permet de récupérer une tâche spécifique en utilisant son id

Utilisez la commande suivante dans votre terminal pour démarrer le serveur : node server.js
puis: utilisez l'outil Postman pour tester les routes avec des adresses comme suit:
GET http://localhost:3000/tasks : Affiche toutes les tâches.
GET http://localhost:3000/task/1 : Affiche la tâche avec l'ID 1.
POST http://localhost:3000/task avec un corps JSON
PUT http://localhost:3000/task/1 avec un corps JSON pour mettre à jour la tâche.
DELETE http://localhost:3000/task/1 pour supprimer une tâche
