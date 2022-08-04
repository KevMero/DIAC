const { DataTypes, Model } = require("sequelize");
const { db } = require('../db/connection');

class Curricular extends Model { }

Curricular.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    duration: {
        type: DataTypes.STRING,
        allowNull: false
    },
    infoPedagogica: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    developData: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    familyBack: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    historySchool: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    styleLearning: {
        type: DataTypes.STRING,
        allowNull: false
    },
    typeIntelligence: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataContextEducation: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    dataContextFamily: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    dataContextSocial: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    identificationEducationalNeed: {
        type: DataTypes.STRING,
        allowNull: false
    },
    adaptationAccessCurriculum: {
        type: DataTypes.STRING,
        allowNull: false
    },
    specializedIntExt: {
        type: DataTypes.STRING,
        allowNull: false
    },
    toDo: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    howToDo: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    sequelize: db,
    modelName: 'Curricular',
});

module.exports = Curricular
