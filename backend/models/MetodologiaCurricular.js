const { DataTypes, Model } = require("sequelize");
const { db } = require('../db/connection');

class MetodologiaCurricular extends Model { }

MetodologiaCurricular.init({
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
    modelName: 'MetodologiaCurricular',
    timestamps: false
});

module.exports = MetodologiaCurricular