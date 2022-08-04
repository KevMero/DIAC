const Institution = require('../models/Institution')
const { Op } = require('sequelize');

const index = async (req, res, next) => {
    try {
        const institutions = await Institution.findAll()
        res.json({
            institutions
        })
    } catch (error) {
        next(error)
    }

}

const filterByName = async (req, res, next) => {
    const nombre = req.query.nombre || ''
    try {
        const institutions = await Institution.findAll({
            where: {
                nameInstitution: {
                    [Op.substring]: nombre,
                }
            }
        })
        res.json({
            institutions
        })
    } catch (error) {
        next(error)
    }
}


const create = async (req, res, next) => {
    try {
        const institution = await Institution.create({ ...req.body })
        res.json(institution)
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    const id = req.params.id
    try {
        const institution = await Institution.findOne({ where: { id } })
        const newInstitution = await institution.update({ ...req.body })
        res.json(newInstitution)
    } catch (error) {
        next(error)
    }

}

const destroy = async (req, res, next) => {
    const id = req.params.id
    try {
        const institution = await Institution.findOne({ where: { id } })
        const institutionDelete = await institution.destroy()
        res.json(institutionDelete)
    } catch (error) {
        next(error)
    }

}

module.exports = {
    create,
    index,
    filterByName,
    update,
    destroy
}