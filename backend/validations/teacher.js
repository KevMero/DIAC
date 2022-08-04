const Teacher = require("../models/Teacher")
const User = require("../models/User")

module.exports = {
  registrationSchema: {
    nameTeacher: {
      toLowerCase: true,
      notEmpty: true,
      errorMessage: "El nombre no puede estar vacio",
    },
    lastNameTeacher: {
      toLowerCase: true,
      notEmpty: true,
      errorMessage: "El apellido no puede estar vacio",
    },
    edad: {
      notEmpty: true,
      errorMessage: "La edad no puede estar vacio",
    },
    email: {
      isEmail: {
        errorMessage: 'El email no es válido'
      },
      custom: {
        options: value => {
          return Teacher.findOne({ where: { email: value } })
            .then(teacher => {
              if (teacher) throw new Error('El email ya esta en uso')
            })
        }
      }
    },
    username: {
      notEmpty: {
        errorMessage: "El usuario no puede estar vacio",
      },
      custom: {
        options: value => {
          return User.findOne({ where: { username: value } })
            .then(user => {
              if (user) throw new Error(`El usuaio ${value} ya esta en uso`)
            })
        }
      }
    },
    password: {
      /* isStrongPassword: {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1
      }, */
      isLength: {
        options: { min: 6 },
        errorMessage: "La contraseña debe tener mínimo 6 digitos",
      },
    },
  }
}  
