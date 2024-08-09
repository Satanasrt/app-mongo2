// mentors.usecases.js

const Mentor = require("/home/rodrigotapia/appi-mongo2/src/models/mentorModel.js");

// Obtener todos los mentores
async function getAll() {
  return Mentor.find({});
}

// Obtener un mentor por ID
async function getById(id) {
  return Mentor.findById(id);
}

// Crear un nuevo mentor
async function create(mentorData) {
  const mentor = new Mentor(mentorData);
  return mentor.save();
}

// Actualizar un mentor por ID
async function updateById(id, mentorData) {
  return Mentor.findByIdAndUpdate(id, mentorData, { new: true });
}

// Eliminar un mentor por ID
async function deleteById(id) {
  return Mentor.findByIdAndDelete(id);
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
