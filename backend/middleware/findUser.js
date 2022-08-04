const Role = require("../models/Role");
const Teacher = require("../models/Teacher");
const User = require("../models/User");

module.exports = async function (req, res, next) {
    if (req.user) {
        const user = await User.findOne({ where: { id: req.user.id }, include: [Role, Teacher] })
        req.fullUser = user
    }
    next()
}