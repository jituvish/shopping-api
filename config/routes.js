var routes = require("express").Router();
var jwt = require("jsonwebtoken");

routes.use("/api/product", require("../routes/Product"));
routes.use("/api/category", require("../routes/Category"));
routes.use("/api/signup", require("../routes/Signup"));
routes.use("/api/auth", require("../routes/Auth"));
routes.use("/api/user", require("../routes/User"));
routes.use("/api/admin/login", require("../routes/AdminLogin"));
routes.use("/api/admin/users", admin_backdoor, require("../routes/Users"));
// routes.use("/api/admin/category", admin_backdoor, require("../routes/Category"));
// routes.use("/api/admin/product", admin_backdoor, require("../routes/Product"));

function admin_backdoor(req, res, next){
    if(! req.headers.authorization || req.headers.authorization == ""){
        return res.status(401).send("somthing went wrong");
    }
    else{
        var token = req.headers.authorization;
        var check = jwt.verify(token, "hello admin");
        if(! check){
            return res.status(401).send("somthing went wrong");
        }
        next();
    }

}

module.exports = routes;