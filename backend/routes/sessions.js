const express = require('express')
const SessionsController = require('../controllers/SessionsController')
const UsersController = require('../controllers/UsersController')


const router = express.Router()

router.route('/')
    .post(
        SessionsController.authenticate,
        SessionsController.generateToken,
        SessionsController.sendToken
    )

router.route('/renew')
    .get(
        SessionsController.validToken,
        UsersController.find,
        SessionsController.generateToken,
        SessionsController.sendToken
    )

module.exports = router