const express = require('express')
const UsersController = require('../controllers/UsersController')
const authenticateAdmin = require('../middleware/authenticateAdmin')
const findUser = require('../middleware/findUser')

const router = express.Router()

router.route('/')
    .post(
        findUser, authenticateAdmin, UsersController.create
    )

module.exports = router