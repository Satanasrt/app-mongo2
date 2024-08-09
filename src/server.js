const express = require("express");

const kodersRoutes = require("./routes/koder.routes"); // Asegúrate de que la ruta es correcta
const mentorsRoutes = require("./routes/mentorRouter"); // Asegúrate de que la ruta es correcta

const app = express();

app.use(express.json());

app.use("/koders", kodersRoutes);
app.use("/mentors", mentorsRoutes); // Usa el router de mentores

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "KodersAPI",
  });
});

module.exports = app;
