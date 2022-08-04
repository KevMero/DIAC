const User = require("../models/User");
const bcrypt = require("bcrypt");
const Role = require("../models/Role");
const Teacher = require("../models/Teacher");

async function find(req, res, next) {
  if (!req.idUser) throw new Error("No existe el usuario");

  try {
    const user = await User.findOne({
      where: { id: req.idUser },
      include: [Role, Teacher],
    });
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
}

async function create(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  const RoleId = req.body.idRole;
  const TeacherId = req.teacher.id;
  try {
    const hash = await bcrypt.hash(password, 10);
    console.log("claveeeee", hash);
    const user = await User.create({
      username,
      password: hash,
      RoleId,
      TeacherId,
    });
    res.status(200).json({ teacher: req.teacher, user });
  } catch (error) {
    res.status(422);
    next(error);
  }
}

module.exports = { create, find };
