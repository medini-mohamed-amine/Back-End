const express = require("express");
const app = express();

const cors = require("cors");

require("dotenv").config();

const port = process.env.APP_port;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

const authRoutes = require("./routes/auth-routes");
app.use(function (req, res, next) {
  res.contentType("application/json");
  next();
});
const adminRoutes = require("./routes/admin-routes");
const clientRoutes = require("./routes/client-routes");
const societeRoutes = require("./routes/societe-routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//There are a few important things to note in the code above. For one, we’ll using the built-in Express
//JSON parser middleware to parse JSON in the next steps. We’ll also utilize the express.urlencoded() middleware
//to parse the URL encoded body.

app.use("/authentification", authRoutes);

app.use("/admin", adminRoutes);
app.use("/client", clientRoutes);
app.use("/societe", societeRoutes);

// simple route
app.get("/", (req, res) => {
  res.json({ message: `Welcome to the backend of the  application` });
});

// set port, listen for requests
app.listen(port, () => {
  console.log(`the server is runing on port ${port} `);
});
