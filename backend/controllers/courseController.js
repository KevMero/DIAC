const Course = require("../models/Course");
const Criteria = require("../models/Criteria");
const Destreza = require("../models/Destreza");
const Objective = require("../models/Objective");

//Recupera todas las materias con sus destrezas y objetivos
const index = async (req, res, next) => {
  try {
    const courses = await Course.findAll({
      include: [Destreza, Objective],
      //   include: [Destreza, Objective, Criteria],
    });
    res.json({
      courses,
    });
  } catch (error) {
    next(error);
  }
};

//Crea una materia con sus destrezas y objetivos
const create = async (req, res, next) => {
  const nameCourse = req.body.nameCourse;
  try {
    const existe = await Course.isExitstCourse(nameCourse.trim());
    if (!existe) {
      const course = await Course.create(
        {
          nameCourse: nameCourse.trim(),
          Destrezas: [...req.body.destrezas],
          Objectives: [...req.body.objectives],
          // criterios: [...req.body.criteria]
        },
        { include: [Destreza, Objective] }
      );
      // }, { include: [Destreza, Objective, Criteria] })

      res.json(course);
    } else {
      throw new Error("this course already exists");
    }
  } catch (error) {
    next(error);
  }
};

//Actualiza el nombre de la materia
const update = async (req, res, next) => {
  const nameCourse = req.body.nameCourse;
  const id = req.params.id;
  try {
    const course = await Course.findOne({ where: { id } });
    if (course) {
      const newNameCourse = await course.update({ nameCourse });
      res.json(newNameCourse);
    } else {
      throw new Error("ERROR: Esta asignatura no existe!");
    }
  } catch (error) {
    next(error);
  }
};

//Elimina una materia con todo y destrezas
const destroy = async (req, res, next) => {
  const id = req.params.id;
  try {
    const course = await Course.findOne({ where: { id } });
    if (course) {
      const courseDelete = await course.destroy();
      res.json(courseDelete);
    } else {
      throw new Error(
        "ERROR: No se puede eliminar esta asignatura, no existe!"
      );
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  index,
  update,
  destroy,
};
