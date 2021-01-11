const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const { user, message, room } = require('../models/index')
const connection = new Sequelize(dbConfig);

user.init(connection)
message.init(connection)
room.init(connection)

user.associate(connection.models);
message.associate(connection.models);
// room.associate(connection.models);

module.exports = connection;