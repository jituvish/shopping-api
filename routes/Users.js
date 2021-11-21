var routes = require("express").Router();
var UsersController = require("../controllers/UsersController");
const { route } = require("./Product");

routes.get("/", UsersController.getAll);

module.exports = routes;