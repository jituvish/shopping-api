var routes = require("express").Router();
var CategoryController = require("../controllers/CategoryController");

routes.get("/", CategoryController.gettAll);

routes.get("/:id", CategoryController.getcategory);

routes.post("/", CategoryController.add);

routes.put("/:id", CategoryController.update);

routes.delete("/:id", CategoryController.delete);

module.exports = routes;