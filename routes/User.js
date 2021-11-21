var routes = require("express").Router();
var UserController = require("../controllers/UserController");

routes.get("/", UserController.index);

module.exports = routes;