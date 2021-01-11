const { DataTypes, Model } = require('sequelize');

class Message extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            text: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
        }, {
            sequelize,
            tableName: 'messages',
            modelName: 'messages',
        });
    }
    static associate(models){
        this.belongsTo(models.users, {
            foreignKey: 'userId',
            as: 'user',
        })
        this.belongsTo(models.rooms, {
            foreignKey: 'roomId',
            as: 'room'
        })
    }
}

module.exports = Message;