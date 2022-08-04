const express = require('express')
const institutionController = require('../controllers/institutionController')
const authenticateAdmin = require('../middleware/authenticateAdmin')
const findUser = require('../middleware/findUser')


const router = express.Router()

router.route('/')
    .get(institutionController.index)
    .post(findUser, authenticateAdmin, institutionController.create)

router.route('/filter')
    .get(institutionController.filterByName)

router.route('/:id')
    .put(findUser, authenticateAdmin, institutionController.update)
    .delete(findUser, authenticateAdmin, institutionController.destroy)

module.exports = router