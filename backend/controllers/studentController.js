const { Op } = require('sequelize');
const Student = require('../models/Student')

const index = async (req, res, next) => {
    try {
        const students = await Student.findAll()
        res.json({
            students
        })
    } catch (error) {
        next(error)
    }

}

const findById = async (req, res, next) => {
    const id = req.params.id
    try {
        const students = await Student.findOne({ where: { id } })
        res.json({
            students
        })
    } catch (error) {
        next(error)
    }

}

const filterByFullName = async (req, res, next) => {
    const nombre = req.query.nombre || ''
    try {
        const students = await Student.findAll({
            where: {
                fullName: {
                    [Op.substring]: nombre,
                }
            }
        })
        res.json({
            students
        })
    } catch (error) {
        next(error)
    }

}

const create = async (req, res, next) => {
    const name = req.body.nameStudent
    const lastName = req.body.lastNameStudent
    const fullName = `${name} ${lastName}`
    try {
        const student = await Student.create({ ...req.body, fullName })
        res.json(student)
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    const id = req.params.id
    try {
        const student = await Student.findOne({ where: { id } })
        const newStudent = await student.update({ ...req.body })
        res.json(newStudent)
    } catch (error) {
        next()
    }

}

const destroy = async (req, res, next) => {
    const id = req.params.id
    try {
        const student = await Student.findOne({ where: { id } })
        const studentDelete = await student.destroy()
        res.json(studentDelete)
    } catch (error) {
        next(error)
    }

}

module.exports = {
    create,
    index,
    findById,
    filterByFullName,
    update,
    destroy
}