const { DataTypes, Model } = require("sequelize");
const { db } = require('../db/connection');

class Course extends Model { }

Course.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nameCourse: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: db,
    modelName: 'Course',
    timestamps: false
});
Course.isExitstCourse = async (nameCourse) => {
    const course = await Course.findOne({ where: { nameCourse } })
    if (course) return true
    return false
}

module.exports = Course
