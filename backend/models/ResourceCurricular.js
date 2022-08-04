const { DataTypes, Model } = require("sequelize");
const { db } = require('../db/connection');

class ResourceCurricular extends Model { }

ResourceCurricular.init({
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
    modelName: 'ResourceCurricular',
    timestamps: false
});

module.exports = ResourceCurricular