const express = require("express");
const app = express();

app.listen(3050, () => {
  console.log("soy el servidor en puerto 3050");
});

app.get("/", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send("<html><body><h1>Bienvenid@s a HOME</h1></body></html>");
});

app.get("/cursos", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send("<html><body><h1>Bienvenid@s a CURSOS !</h1></body></html>");
});
app.get("/contacto", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send("<html><body><h1>Bienvenid@s a CONTACTOS</h1></body></html>");
});

app.use((req, res) => {
  res.status(404).json({
    error: "404",
    description: "No se encuentra la ruta o recurso solicitado.",
  });
});
