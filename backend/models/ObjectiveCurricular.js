const { DataTypes, Model } = require("sequelize");
const { db } = require('../db/connection');

class ObjectiveCurricular extends Model { }

ObjectiveCurricular.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nameObjective: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize: db,
    modelName: 'ObjectiveCurricular',
    timestamps: false
});

module.exports = ObjectiveCurricular