const { DataTypes, Model } = require("sequelize");
const { db } = require('../db/connection');

class DestrezaCurricular extends Model { }

DestrezaCurricular.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nameDestreza: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize: db,
    modelName: 'DestrezaCurricular',
    timestamps: false
});

module.exports = DestrezaCurricular