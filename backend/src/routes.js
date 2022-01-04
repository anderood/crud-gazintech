const express = require('express');
const UserController = require('./controllers/UserController');
const LevelController = require('./controllers/LevelController');

const routes = express.Router();

routes.get('/devs', (UserController.index));
routes.post('/devs', (UserController.store));
routes.put('/devs/:id', (UserController.update));
routes.delete('/devs/:id', (UserController.delete));

routes.get('/levels', (LevelController.index));
routes.post('/levels', (LevelController.store));
routes.put('/levels/:id', (LevelController.update));
routes.delete('/levels/:id', (LevelController.delete));

module.exports = routes;