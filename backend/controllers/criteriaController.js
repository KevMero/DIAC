const Criteria = require("../models/Criteria");
const { QueryTypes } = require('sequelize');
const { db } = require('../db/connection');

//Crea un criterio de una materia
const create = async (req, res, next) => {
    const CourseId = req.params.id
    let templateQuery = "INSERT INTO `criterios`(`nameCriteria`, `CourseId`) VALUES "
    try {
        req.body.criterios.forEach(async (criterio, index) => {
            if (index === req.body.criterios.length - 1) {
                templateQuery += `('${criterio.nameCriteria}', ${CourseId})`
                return
            }
            templateQuery += `('${criterio.nameCriteria}', ${CourseId}),`
        });
        const criterios = await db.query(templateQuery, { type: QueryTypes.INSERT });
        res.json({
            'status': res.statusCode,
            'response': 'Ok',
            criterios
        })
    } catch (error) {
        next(error)
    }
}

//Actualiza un criterio de la materia que se envia como parametro
const update = async (req, res) => {
    const nameCriteria = req.body.nameCriteria
    const id = req.params.id
    try {
        const criteria = await Criteria.findOne({ where: { id } })
        if (criteria) {
            const newCriteria = await criteria.update({ nameCriteria })
            res.json(newCriteria)
        } else {
            throw new Error('ERROR: No se puede actualizar este criterio, no existe!')
        }
    } catch (error) {
        next(error)
    }
}

//Elimina un criterio
const destroy = async (req, res) => {
    const id = req.params.id
    try {
        const criteria = await Criteria.findOne({ where: { id } })
        if (criteria) {
            const criteriaDelete = await criteria.destroy()
            res.json(criteriaDelete)
        } else {
            throw new Error('ERROR: No se puede eliminar este criterio, no existe!')
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    create,
    update,
    destroy
}