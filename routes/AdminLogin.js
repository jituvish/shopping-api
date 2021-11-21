var routes = require("express").Router();
var AdminLoginController = require("../controllers/AdminLoginController");

routes.post("/", AdminLoginController.index);

module.exports = routes;