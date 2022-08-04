const { DataTypes, Model } = require("sequelize");
const { db } = require('../db/connection');

class Destreza extends Model { }

Destreza.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nameDestreza: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: db,
    modelName: 'Destreza',
    timestamps: false
});

module.exports = Destreza