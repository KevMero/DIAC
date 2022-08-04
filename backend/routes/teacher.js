const express = require('express')
const { checkSchema } = require('express-validator')

const teacherController = require('../controllers/teacherController')
const authenticateAdmin = require('../middleware/authenticateAdmin')
const findUser = require('../middleware/findUser')
const UsersController = require('../controllers/UsersController')
const { registrationSchema } = require('../validations/teacher')



const router = express.Router()

router.route('/')
    .get(teacherController.index)
    .post(findUser, authenticateAdmin, checkSchema(registrationSchema), teacherController.create, UsersController.create)

router.route('/filter/courses')
    .post(teacherController.filterByCourse)

router.route('/:id')
    .put(findUser, authenticateAdmin, teacherController.update)
    .delete(findUser, authenticateAdmin, teacherController.destroy)

module.exports = router