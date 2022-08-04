const { DataTypes, Model } = require("sequelize");
const { db } = require('../db/connection');

class CriteriaCurricular extends Model { }

CriteriaCurricular.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nameCriteria: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize: db,
    modelName: 'CriteriaCurricular',
    timestamps: false
});

module.exports = CriteriaCurricular