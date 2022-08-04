const { validationResult } = require('express-validator');

const Course = require('../models/Course')
const Teacher = require('../models/Teacher')
const { Op } = require('sequelize');

const index = async (req, res, next) => {
    try {
        const teachers = await Teacher.findAll({ include: Course })
        res.json({
            teachers
        })
    } catch (error) {
        next(error)
    }
}

const filterByCourse = async (req, res, next) => {
    const courses = [...req.body.courses]
    try {
        const teachers = await Teacher.findAll({
            where: {
                CourseId: {
                    [Op.in]: courses,
                }
            },
            include: [Course]
        })
        res.json({
            teachers
        })
    } catch (error) {
        next(error)
    }
}


const create = async (req, res, next) => {
    const errors = validationResult(req);
    const CourseId = req.body.courseId
    try {
        if (!errors.isEmpty()) {
            res.status(400)
            const err = errors.array({ onlyFirstError: true })[0]
            throw new Error(err.msg)
        }
        const teacher = await Teacher.create({ ...req.body, CourseId })
        req.teacher = teacher
        next()
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    const id = req.params.id
    const CourseId = req.body.courseId
    try {
        const teacher = await Teacher.findOne({ where: { id } })
        const newTeacher = await teacher.update({ ...req.body, CourseId })
        res.json(newTeacher)
    } catch (error) {
        next(error)
    }
}

const destroy = async (req, res, next) => {
    const id = req.params.id
    try {
        const teacher = await Teacher.findOne({ where: { id } })
        const teacherDelete = await teacher.destroy()
        res.json(teacherDelete)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    create,
    index,
    filterByCourse,
    update,
    destroy
}