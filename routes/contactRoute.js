const express = require('express');
const contactController = require('../controllers/contactController');
const contactRouter = express.Router();

contactRouter.get('/all', contactController.getContactRequests);
contactRouter.post('/add', contactController.addContactRequest);
contactRouter.delete('/delete/:id', contactController.deleteContactRequest);

module.exports = contactRouter;