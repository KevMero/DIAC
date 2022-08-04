const express = require('express')
const curricularControler = require('../controllers/CurricularController')

const router = express.Router()

router.route('/')
    .get(curricularControler.index)
    .post(curricularControler.create)

router.route('/:id')
    .get(curricularControler.findById)
    .put(curricularControler.update)
    .delete(curricularControler.destroy)

module.exports = router