const { DataTypes, Model } = require("sequelize");
const { db } = require('../db/connection');

class Student extends Model { }

Student.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nameStudent: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastNameStudent: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dateOfBirth: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    numBrothers: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    placeOccupies: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tutor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nameFather: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nameMother: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    town: {
        type: DataTypes.STRING,
        allowNull: false
    },
    province: {
        type: DataTypes.STRING,
        allowNull: false
    },
    postalCode: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    course: {
        type: DataTypes.STRING,
        allowNull: false
    },
    parallel: {
        type: DataTypes.CHAR(1),
        allowNull: false
    },
    schoolYear: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: db,
    modelName: 'Student',
    timestamps: false
})

module.exports = Student