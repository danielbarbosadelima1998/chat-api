
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('messages',
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      text: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      roomId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'rooms',
          key: 'id',
        }
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id',
        }
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,

      },
    }),

  down: (queryInterface) => queryInterface.dropTable('messages'),
};