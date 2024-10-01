const express = require('express');
const skillsRouter = express.Router();
const skillsController = require('../controllers/skillsController');

skillsRouter.get('/webskills',skillsController.getWebSkills);
skillsRouter.get('/androidskills',skillsController.getAndroidSkills);
skillsRouter.get('/codingskills',skillsController.getCodingSkills);
skillsRouter.get('/toolskills',skillsController.getToolSkills);

module.exports = skillsRouter;