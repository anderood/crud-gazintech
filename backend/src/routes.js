const express = require('express');
const UserController = require('./controllers/UserController');
const LevelController = require('./controllers/LevelController');

const routes = express.Router();

routes.get('/dev', (UserController.index));

routes.post('/dev', (UserController.store));

routes.get('/levels', (LevelController.index));

routes.post('/levels', (LevelController.store));

module.exports = routes;