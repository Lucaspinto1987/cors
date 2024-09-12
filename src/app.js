const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware para habilitar CORS
app.use(cors());

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, "../frontend")));

const charactersRoutes = require("./routes/characters");
app.use("/characters", charactersRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.listen(port, () => {
  console.log(
    `El Servidor está escuchando en el puerto http://localhost:${port}`
  );
});
