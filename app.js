require("dotenv").config();
const { PORT, PATH } = process.env;
const hbs = require("hbs");
const express = require("express");
const app = express();

// handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

/**
 * Indica que se importara la carpeta public
 */
app.use(express.static("public"));

app.get("/", (req, resp) => {
  resp.render("home", {
    titleApp: "Course of Node.js",
    title: "Welcome to the aplication with server and hbs",
  });
});

app.get("/generic", (req, resp) => {
  resp.render("generic");
});

app.get("/elements", (req, resp) => {
  resp.render("elements");
});

app.get("*", (req, resp) => {
  console.log("No existe la ruta");
  resp.render("404");
});

app.listen(PORT, () => {
  console.log("Escuchando por el puerto: ", PORT);
});
