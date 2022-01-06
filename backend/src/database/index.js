const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require("../models/User");
const Level = require("../models/Level");

const connection = new Sequelize(dbConfig);


Level.init(connection);
User.init(connection);
User.associate(connection.models);
Level.associate(connection.models);
module.exports = connection;
