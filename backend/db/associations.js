const Course = require("../models/Course");
const Destreza = require("../models/Destreza");
const Objective = require("../models/Objective");
const Criteria = require("../models/Criteria");
const Teacher = require("../models/Teacher");
const Student = require("../models/Student");
const Institution = require("../models/Institution");
const User = require("../models/User");
const Role = require("../models/Role");
const Curricular = require("../models/Curricular");
const DestrezaCurricular = require("../models/DestrezaCurricular");
const ObjectiveCurricular = require("../models/ObjectiveCurricular");
const MetodologiaCurricular = require("../models/MetodologiaCurricular");
const CriteriaCurricular = require("../models/CriteriaCurricular");
const ResourceCurricular = require("../models/ResourceCurricular");
const ResultFinalCurricular = require("../models/ResultFinalCurricular");

/***Asociaciones con el modelo course con sus destrezas y objetivos***/
//Una materia tiene muchas destrezas, objetivos y criterios de evaluacion
Course.hasMany(Destreza)
Course.hasMany(Objective)
Course.hasMany(Criteria)
//Un objetivo solo pertenece a una materia
Destreza.belongsTo(Course)
Objective.belongsTo(Course)
Criteria.belongsTo(Course)


/***Asociaciones con el modelo Docentes y roles***/
//Un rolo puede ser parte de vario usuarios y un usuario solo le pertence a un rol
Role.hasMany(User)
User.belongsTo(Role)
//Un docente tiene solo un usuario y un usuario solo le pertence a un docente
Teacher.hasOne(User)
User.belongsTo(Teacher)


/***Asociaciones con el modelo Teacher y Course***/
//Una Materia solo puede ser impartida por un docente y un docentes solo imparte una materia
Course.hasMany(Teacher)
Teacher.belongsTo(Course)


/***Asociaciones del modelo course con los modelos usados en el documento curricular***/
//Una materia tiene muchas destrezas, objetivos y criterios de evaluacion, etc
Course.hasMany(DestrezaCurricular)
Course.hasMany(ObjectiveCurricular)
Course.hasMany(CriteriaCurricular)
Course.hasMany(MetodologiaCurricular)
Course.hasMany(ResourceCurricular)
Course.hasMany(ResultFinalCurricular)
//Estos modelos solo pertenece a una materia
DestrezaCurricular.belongsTo(Course)
ObjectiveCurricular.belongsTo(Course)
CriteriaCurricular.belongsTo(Course)
MetodologiaCurricular.belongsTo(Course)
ResourceCurricular.belongsTo(Course)
ResultFinalCurricular.belongsTo(Course)

/***Asociaciones del modelo course con los modelos usados en el documento curricular***/
//Una materia tiene muchas destrezas, objetivos y criterios de evaluacion, etc
Curricular.hasMany(DestrezaCurricular)
Curricular.hasMany(ObjectiveCurricular)
Curricular.hasMany(CriteriaCurricular)
Curricular.hasMany(MetodologiaCurricular)
Curricular.hasMany(ResourceCurricular)
Curricular.hasMany(ResultFinalCurricular)
//Estos modelos solo pertenece a una materia
DestrezaCurricular.belongsTo(Curricular)
ObjectiveCurricular.belongsTo(Curricular)
CriteriaCurricular.belongsTo(Curricular)
MetodologiaCurricular.belongsTo(Curricular)
ResourceCurricular.belongsTo(Curricular)
ResultFinalCurricular.belongsTo(Curricular)


/***Asociaciones con el modelo Curricular***/
//Una estudiente solo puede ser tener por un documento curricular y un documento solo tiene un estudiante
Student.hasOne(Curricular)
Curricular.belongsTo(Student)

//Una institucion tiene muchos documentos curriculares y un documento solo tiene una institucion
Institution.hasMany(Curricular)
Curricular.belongsTo(Institution)

//Los Docentes pueden estar en muchos documentos y los documentos tiene varios docentes 
Teacher.belongsToMany(Curricular, { through: 'curricular_teachers' })
Curricular.belongsToMany(Teacher, { through: 'curricular_teachers' })

//Un documento curricular tiene muchas materias varias materias pueden estar en muchos documentos
Course.belongsToMany(Curricular, { through: 'curricular_courses' })
Curricular.belongsToMany(Course, { through: 'curricular_courses' })

/* //Un documento curricular tiene muchas destrezas, varias destrezas pueden estar en muchos documentos
DestrezaCurricular.belongsToMany(Curricular, { through: 'curricular_destrezas' })
Curricular.belongsToMany(DestrezaCurricular, { through: 'curricular_destrezas' })

//Un documento curricular tiene muchas Objetivos, varias Objetivos pueden estar en muchos documentos
ObjectiveCurricular.belongsToMany(Curricular, { through: 'curricular_objectives' })
Curricular.belongsToMany(ObjectiveCurricular, { through: 'curricular_objectives' })

//Un documento curricular tiene muchos criterios de evaluacion, varias criterios de evaluacion pueden estar en muchos documentos
CriteriaCurricular.belongsToMany(Curricular, { through: 'curricular_criteria' })
Curricular.belongsToMany(CriteriaCurricular, { through: 'curricular_criteria' })

//Un documento curricular tiene muchas Metodologias, varias Metodologias pueden estar en muchos documentos
MetodologiaCurricular.belongsToMany(Curricular, { through: 'curricular_metodologia' })
Curricular.belongsToMany(MetodologiaCurricular, { through: 'curricular_metodologia' })

//Un documento curricular tiene muchas recursos, varias recursos pueden estar en muchos documentos
ResourceCurricular.belongsToMany(Curricular, { through: 'curricular_resource' })
Curricular.belongsToMany(ResourceCurricular, { through: 'curricular_resource' })

//Un documento curricular tiene muchas resultados finales, varias resultados pueden estar en muchos documentos
ResultFinalCurricular.belongsToMany(Curricular, { through: 'curricular_result' })
Curricular.belongsToMany(ResultFinalCurricular, { through: 'curricular_result' })
 */


