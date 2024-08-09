const express = require("express");
const createError = require("http-errors");

const mentorsUseCases = require("/home/rodrigotapia/appi-mongo2/usecases/mentorUseCases.js");

const router = express.Router();

// Obtener todos los mentores
router.get("/", async (request, response) => {
  try {
    const mentors = await mentorsUseCases.getAll();

    response.json({
      success: true,
      message: "All mentors",
      data: { mentors },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

// Obtener un mentor por ID
router.get("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const mentor = await mentorsUseCases.getById(id);

    if (!mentor) {
      throw createError(404, "Mentor not found");
    }

    response.json({
      success: true,
      message: "Mentor by id",
      data: { mentor },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

// Crear un nuevo mentor
router.post("/", async (request, response) => {
  try {
    const mentorData = request.body;
    const newMentor = await mentorsUseCases.create(mentorData);

    response.json({
      success: true,
      message: "Mentor created",
      data: { mentor: newMentor },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

// Actualizar un mentor por ID
router.patch("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const mentorData = request.body;

    const mentorUpdated = await mentorsUseCases.updateById(id, mentorData);

    response.json({
      success: true,
      message: "Mentor updated",
      data: { mentor: mentorUpdated },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

// Eliminar un mentor por ID
router.delete("/:id", async (request, response) => {
  try {
    const id = request.params.id;

    const mentorDeleted = await mentorsUseCases.deleteById(id);

    response.json({
      success: true,
      message: "Mentor deleted",
      data: { mentor: mentorDeleted },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
