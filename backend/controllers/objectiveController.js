const Objective = require('../models/Objective.js')
const { QueryTypes } = require('sequelize');
const { db, } = require('../db/connection')


//Crea un objetivo de una materia
const create = async (req, res, next) => {
    const CourseId = req.params.id
    let templateQuery = "INSERT INTO `objectives`(`nameObjective`, `CourseId`) VALUES "
    try {
        req.body.objectives.forEach(async (objective, index) => {
            if (index === req.body.objectives.length - 1) {
                templateQuery += `('${objective.nameObjective}', ${CourseId})`
                return
            }
            templateQuery += `('${objective.nameObjective}', ${CourseId}),`

        });
        const objectives = await db.query(templateQuery, { type: QueryTypes.INSERT });
        res.json({
            'status': res.statusCode,
            'response': 'Ok',
            objectives
        })
    } catch (error) {
        next(error)
    }
}

//Actualiza un objetivo de la materia que se envia como parametro
const update = async (req, res, next) => {
    const nameObjective = req.body.nameObjective
    const id = req.params.id
    try {
        const objective = await Objective.findOne({ where: { id } })
        if (objective) {
            const newObjective = await objective.update({ nameObjective })
            res.json(newObjective)
        } else {
            throw new Error('ERROR: No se puede actualizar este objetivo, no existe!')
        }
    } catch (error) {
        next(error)
    }
}

//Elimina un objetivo
const destroy = async (req, res, next) => {
    const id = req.params.id

    try {
        const objective = await Objective.findOne({ where: { id } })
        if (objective) {
            const objectiveDelete = await objective.destroy()
            res.json(objectiveDelete)
        } else {
            throw new Error('ERROR: No se puede eliminar este objetivo, no existe!')
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