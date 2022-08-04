const { DataTypes, Model } = require("sequelize");
const { db } = require('../db/connection');

class ResultFinalCurricular extends Model { }

ResultFinalCurricular.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize: db,
    modelName: 'ResultFinalCurricular',
    timestamps: false
});

module.exports = ResultFinalCurricular