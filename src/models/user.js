const { DataTypes, Model } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
      {
        sequelize,
        modelName: 'users',
        tableName: 'users',
      });
  }
  static associate(models) {
    this.belongsToMany(models.rooms, {
      foreignKey: 'userId',
      through: 'UserRoom',
      as: 'rooms',
    })
    this.hasMany(models.messages, {
      foreignKey: 'userId',
      as: 'messages'
    })
  }
}

module.exports = User;