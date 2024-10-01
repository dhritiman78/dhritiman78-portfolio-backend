const express = require('express');
const projectRouter = express.Router();
const projectController = require('../controllers/projectController');

projectRouter.get('/all', projectController.getProjects);
projectRouter.get('/incv', projectController.getProjectsInCV);
projectRouter.post('/add', projectController.addProject);
projectRouter.put('/edit/:id', projectController.editProject);
projectRouter.delete('/delete/:id', projectController.deleteProject);

module.exports = projectRouter;