const { DataTypes, Model } = require('sequelize');

class Room extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
        },
            {
                sequelize,
                modelName: 'rooms',
                tableName: 'rooms',
            });
    }
    static associate(models) {
        this.belongsToMany(models.users, {
            foreignKey: 'userId',
            through: 'UserRoom',
            as: 'user',
          })      
    }
}

module.exports = Room;