//Imports
const path = require('path')
const express = require('express')
const cors = require('cors')
const expressJwt = require('express-jwt')
require('dotenv').config()

//Import secret
const { jwtSecret } = require('./config/secrets')

//Import connections Database
const { connect, syncTables } = require('./db/connection')
require('./db/associations')

//Import Routes
const course = require('./routes/course')
const student = require('./routes/student')
const teacher = require('./routes/teacher')
const institution = require('./routes/institution')
const curricular = require('./routes/curricular')
const sessions = require('./routes/sessions')
const users = require('./routes/users')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')



const app = express()
const port = process.env.PORT || 3000

//connection MySQL
connect()
syncTables()

//middlewares
app.use(cors())

app.use(express.json({}))
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

app.use(
    expressJwt({ secret: jwtSecret, algorithms: ['HS256'] })
        .unless({ path: ['/login'] })
)

//Routes
app.use('/login', sessions)
app.use('/user', users)
app.use('/course', course)
app.use('/student', student)
app.use('/teacher', teacher)
app.use('/institution', institution)
app.use('/doc-curricular', curricular)
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}!`)
})