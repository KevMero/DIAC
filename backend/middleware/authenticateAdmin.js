module.exports = function (req, res, next) {
    if (req.fullUser && req.fullUser.Role.nameRol === 'Admin') return next()

    next(new Error('No tienes perimisos para realizar esta acción'))
}