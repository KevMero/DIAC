const { Op } = require('sequelize')

const Course = require('../models/Course')
const Curricular = require('../models/Curricular')
const Institution = require('../models/Institution')
const DestrezaCurricular = require('../models/DestrezaCurricular')
const ObjectiveCurricular = require('../models/ObjectiveCurricular')
const Student = require('../models/Student')
const Teacher = require('../models/Teacher')
const MetodologiaCurricular = require('../models/MetodologiaCurricular')
const CriteriaCurricular = require('../models/CriteriaCurricular')
const ResourceCurricular = require('../models/ResourceCurricular')
const ResultFinalCurricular = require('../models/ResultFinalCurricular')




const index = async (req, res, next) => {
    try {
        const docs = await Curricular.findAll({ include: [Student, Institution, Course, Teacher, DestrezaCurricular, ObjectiveCurricular, CriteriaCurricular, MetodologiaCurricular, ResourceCurricular, ResultFinalCurricular] })
        res.json({
            docs
        })
    } catch (error) {
        next(error)
    }

}

const findById = async (req, res, next) => {
    const id = req.params.id
    try {
        const docs = await Curricular.findOne({ where: { id }, include: [Student, Institution, Course, Teacher, DestrezaCurricular, ObjectiveCurricular, CriteriaCurricular, MetodologiaCurricular, ResourceCurricular, ResultFinalCurricular] })
        res.json({
            docs
        })
    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    console.log(req.body)
    const coursesArray = [...req.body.courses]
    const teachersArray = [...req.body.teachers]
    // const destrezasArray = [...req.body.destrezas]
    // const objectivesArray = [...req.body.objectives]
    // const criteriasArray = [...req.body.criterias]
    // const metodologiasArray = [...req.body.metodologias]
    // const resourcesArray = [...req.body.resources]
    // const resultsArray = [...req.body.results]

    try {
        //Busca los cursos y docentes seleccionados por el ID y los guarda en variables
        const courses = await Course.findAll({ where: { id: { [Op.in]: coursesArray } } })
        const teachers = await Teacher.findAll({ where: { id: { [Op.in]: teachersArray } } })

        //Inserta el docuemento curricular
        const doc = await Curricular.create({ ...req.body })

        //Relaciona el los cursos y los docentes seleccionados al documento curricular
        const docWithCourses = await doc.addCourse(courses)
        const docWithTeacher = await doc.addTeacher(teachers)

        //inserta las destrezas en el modelo DestrezaCurricular y luego las relaciona al documento curricular creado
        // destrezasArray.forEach(async destreza => {
        //     const newDestreza = await DestrezaCurricular.create(destreza)
        //     await doc.addDestrezaCurricular(newDestreza)
        // })

        //inserta los objetivos en el modelo ObjectiveCurricular y luego las relaciona al documento curricular creado
        // objectivesArray.forEach(async objective => {
        //     const newObjective = await ObjectiveCurricular.create(objective)
        //     await doc.addObjectiveCurricular(newObjective)
        // })

        //inserta los criterios de evaluacion en el modelo CriteriaCurricular y luego las relaciona al documento curricular creado
        // criteriasArray.forEach(async criteria => {
        //     const newCriteria = await CriteriaCurricular.create(criteria)
        //     await doc.addCriteriaCurricular(newCriteria)
        // })

        //inserta las metodologias en el modelo MetodologiaCurricular y luego las relaciona al documento curricular creado
        // metodologiasArray.forEach(async metodologia => {
        //     const newMetodologia = await MetodologiaCurricular.create(metodologia)
        //     await doc.addMetodologiaCurricular(newMetodologia)
        // })

        //inserta los recursos en el modelo ResourceCurricular y luego las relaciona al documento curricular creado
        // resourcesArray.forEach(async resource => {
        //     const newResource = await ResourceCurricular.create(resource)
        //     await doc.addResourceCurricular(newResource)
        // })

        //inserta los resultados finales en el modelo ResultFinalCurricular y luego las relaciona al documento curricular creado
        // resultsArray.forEach(async result => {
        //     const newResult = await ResultFinalCurricular.create(result)
        //     await doc.addResultFinalCurricular(newResult)
        // })

        //respuesta
        res.json({ doc, docWithCourses, docWithTeacher })

    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    const id = req.params.id
    try {
        const doc = await Curricular.findOne({ where: { id } })
        const newDoc = await doc.update({ ...req.body })
        res.json(newDoc)
    } catch (error) {
        next(error)
    }
}

const destroy = async (req, res, next) => {
    const id = req.params.id
    try {
        const doc = await Curricular.findOne({ where: { id } })
        const docDelete = await doc.destroy()
        res.json(docDelete)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    create,
    index,
    findById,
    update,
    destroy
}