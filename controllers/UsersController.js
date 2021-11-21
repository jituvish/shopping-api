var UserModel = require("../models/UserModel");
exports.getAll = (req, res)=>{
    UserModel.find({}, function(err, result){
        res.send(result); 
    })



}