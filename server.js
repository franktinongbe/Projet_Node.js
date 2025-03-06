
const express= require('express');
const bodyParser= require('body-parser');


const app= express();
const port= 3000;

app.use(bodyParser.json());
// déclaration des taches 
let tasks=[
    {id:1, description: "Faire des devoirs"},
    {id:2, description: "Apprendre les cours informatiques"},
    {id:3, description: 'Organiser sa journée'},
    {id:4, description: "Soumettre devoir à 22H42"},
    {id:5, description: "Dormir à 03H30"}

];

app.listen(port, () =>{
    console.log(`serveur écoutant sur le port ${port}`);
});
// AFFICHE TOUTES LES TACHES
app.get('/tasks', (req, res) =>{
    const taskReferences= tasks.map(task=>`/task/${task.id}`);
    res.json(taskReferences);
});
// ROUTES:
// Selection de tache spécifique 
app.get('/task/:id', (req, res)=>{
    const taskId= parseInt(req.params.id);
    const task=tasks.find(task => task.id === taskId);

    if(task){
        res.json(task);
    }else{
        res.status(404).json({error: 'Tâche non trouvée'});
    }
});
// Modifier tache
app.post('/task', (req, res)=>{
    const newTask={
        id: tasks.length +1, 
        description: req.body.description
    };
    tasks.push(newTask);
    res.status(201).json({message:'Tache ajoutée avec succès',task:newTask});
});
// Ajouter de taches
app.put('/task/ : id', (req, res)=>{
    const taskId = parseInt(req.params.id)
    if(task) {
        task.description = req.body.description;
        res.json({message: 'Tache mise à jour avec succès', task});
    }else {
        res.status(404).json({error: 'Tache non trouvée'});
    }
});
// Suppression de tache
app.delete('/task/:id', (req, res)=>{
    const taskId= parseInt(req.params.id);
    res.json({message: 'Tache supprimée avec succès'});
});

