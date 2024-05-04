const express = require("express");
const app = express();

app.listen(3050, () => {
  console.log("soy el servidor en puerto 3050");
});

app.get("/", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send("soy home");
});

app.get("/cursos", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send("soy cursos");
});
app.get("/contacto", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send("soy contacto");
});

app.use((req, res) => {
  res.status(404).json({
    error: "404",
    description: "No se encuentra la ruta o recurso solicitado.",
  });
});
