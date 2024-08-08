const express = require("express");

const kodersRoutes = require("./routes/koder.routes"); // Importa las rutas correctamente

const app = express();

app.use(express.json());

app.use("/koders", kodersRoutes); // Usa el router correctamente

app.get("/", (request, response) => {
  response.json({
    success: true,
    message: "KodersAPI",
  });
});

module.exports = app;
