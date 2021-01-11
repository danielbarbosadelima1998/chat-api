
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users',
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // roomId: {
      //   type: Sequelize.UUID,
      //   allowNull: true,
      //   references: {
      //     model: 'rooms',
      //     key: 'id',
      //   }
      // },
      // messageId: {
      //   type: Sequelize.UUID,
      //   allowNull: true,
      //   references: {
      //     model: 'messages',
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

  down: (queryInterface) => queryInterface.dropTable('users'),
};