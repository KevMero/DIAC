const { DataTypes, Model } = require("sequelize");
const { db } = require('../db/connection');

class Role extends Model { }

Role.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nameRol: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: db,
    modelName: 'Role',
    timestamps: false
})

module.exports = Role