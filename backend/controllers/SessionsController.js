const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const secrets = require('../config/secrets')
const User = require('../models/User')
const Role = require('../models/Role')
const Teacher = require('../models/Teacher')
const { jwtSecret } = require('../config/secrets')

async function authenticate(req, res, next) {
    const username = req.body.username
    const password = req.body.password
    let match
    try {
        const user = await User.findOne({ where: { username }, include: [Role, Teacher] })
        if (user) match = await bcrypt.compare(password, user.password)
        if (match) {
            req.user = user
            next()
        } else {
            next(new Error('Invalid Credentials'))
        }
    } catch (error) {
        next(new Error(error))
    }
}

function generateToken(req, res, next) {
    if (!req.user) return next()
    req.token = jwt.sign({ id: req.user.id, role: req.user.Role.nameRol }, secrets.jwtSecret)
    next()
}

function sendToken(req, res) {
    if (req.user && req.token) {
        res.json({
            user: req.user,
            jwt: req.token
        })
    } else {
        res.status(422).json({
            error: 'Could not create user'
        })
    }
}

function validToken(req, res, next) {
    let token = (req.headers.authorization).split(' ')
    try {
        if (!token) throw new Error('Error Token not exists')
        const { id } = jwt.verify(token[1], jwtSecret)
        req.idUser = id
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = {
    authenticate,
    generateToken,
    sendToken,
    validToken
}