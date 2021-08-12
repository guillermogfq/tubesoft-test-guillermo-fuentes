const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.json());

const db = require("./app/models");
db.sequelize.sync({ force: true });

app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a la API del Test Tubesoft." });
});

require("./app/routes/time-record.routes")(app);
module.exports = app;

