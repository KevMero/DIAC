const express = require('express')
const courseController = require('../controllers/courseController')
const destrezaController = require('../controllers/destrezaController')
const objectiveController = require('../controllers/objectiveController')
const criteriaController = require('../controllers/criteriaController')
const authenticateAdmin = require('../middleware/authenticateAdmin')
const findUser = require('../middleware/findUser')



const router = express.Router()

//Materias
router.route('/')
    .get(courseController.index)
    .post(findUser, authenticateAdmin, courseController.create)

router.route('/:id')
    .put(findUser, authenticateAdmin, courseController.update)
    .delete(findUser, authenticateAdmin, courseController.destroy)

//detrezas
router.route('/:id/destreza')
    .post(findUser, authenticateAdmin, destrezaController.create)

router.route('/destreza/:id')
    .put(findUser, authenticateAdmin, destrezaController.update)
    .delete(findUser, authenticateAdmin, destrezaController.destroy)

//Objetivos
router.route('/:id/objective')
    .post(findUser, authenticateAdmin, objectiveController.create)

router.route('/objective/:id')
    .put(findUser, authenticateAdmin, objectiveController.update)
    .delete(findUser, authenticateAdmin, objectiveController.destroy)

//Criterios
router.route('/:id/criteria')
    .post(findUser, authenticateAdmin, criteriaController.create)

router.route('/criteria/:id')
    .put(findUser, authenticateAdmin, criteriaController.update)
    .delete(findUser, authenticateAdmin, criteriaController.destroy)

module.exports = router