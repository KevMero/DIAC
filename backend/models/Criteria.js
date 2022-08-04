const { DataTypes, Model } = require("sequelize");
const { db } = require('../db/connection');

class Criteria extends Model { }

Criteria.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nameCriteria: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: db,
    modelName: 'criterio',
    timestamps: false
});

module.exports = Criteria