const sequelize = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('rooms',
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      description:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      // userId: {
      //   type: Sequelize.UUID,
      //   allowNull: true,
      //   references: {
      //     model: 'users',
      //     key: 'id',
      //   }
      // },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),

  down: (queryInterface) => queryInterface.dropTable('rooms'),
};