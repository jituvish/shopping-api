var AdminModel = require("../models/AdminModel");
var sha1 = require("sha1");
var jwt = require("jsonwebtoken");

exports.index = (req, res)=>{
    var u = req.body.username;
    var p = sha1(req.body.password);
    AdminModel.find({ username : u }, function(err, result){
        if(result.length == 1)
        {
            if(result[0].password == p)
            {
                var token = jwt.sign({ id : result[0]._id }, "hello admin");
                res.status(200).json(token);
            }
            else
            {
                res.status(401).json({ type : 2});
            }
        }
        else
        {
            res.status(401).json({ type : 1});

        }
    })

}