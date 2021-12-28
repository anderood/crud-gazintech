const express = require('express');
const UserController =  require('./controllers/UserController');

const routes = express.Router();

routes.get('/dev', (UserController.index));

routes.post('/dev', (UserController.store));

routes.put('/dev/:id', (UserController.update));

routes.delete('/dev/:id', UserController.delete);

module.exports = routes;