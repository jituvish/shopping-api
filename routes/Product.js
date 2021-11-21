var routes = require("express").Router();
const { monitorEventLoopDelay } = require("perf_hooks");
var ProductController = require("../controllers/ProductController");

routes.get("/", ProductController.getAll);

routes.get("/:id", ProductController.getProduct);

routes.post("/", ProductController.add);

routes.put("/:id", ProductController.update);

routes.delete("/:id", ProductController.delete);


module.exports = routes;