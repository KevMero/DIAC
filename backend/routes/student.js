const express = require('express')
const studentController = require('../controllers/studentController')

const router = express.Router()

router.route('/')
    .get(studentController.index)
    .post(studentController.create)

router.route('/filter')
    .get(studentController.filterByFullName)

router.route('/:id')
    .get(studentController.findById)
    .put(studentController.update)
    .delete(studentController.destroy)

module.exports = router