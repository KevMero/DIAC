const { DataTypes, Model } = require("sequelize");
const { db } = require('../db/connection');

class Objective extends Model { }

Objective.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nameObjective: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: db,
    modelName: 'Objective',
    timestamps: false
})

module.exports = Objective