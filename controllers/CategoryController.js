var CategoryModel = require("../models/CategoryModel");
var mongo = require("mongodb");

exports.gettAll = (req, res)=>{
    CategoryModel.find({}, function(err, result){
        res.send(result);
    })
}

exports.getcategory = (req, res)=>{
    var id = mongo.ObjectId(req.params.id);
    CategoryModel.find({ _id : id}, function(err, result){
        res.send(result);
    })
}

exports.add = (req, res)=>{
    delete req.body._id; 
    CategoryModel.save( req.body , function(err, result){
        res.send(result.ops[0]);
    })
}

exports.update = (req, res)=>{
    var id = mongo.ObjectId(req.params.id);
    delete req.body._id;
    CategoryModel.update({ _id : id}, req.body, function(err, result){
        res.send(result);
    })
}

exports.delete = (req, res)=>{
    var id = mongo.ObjectId(req.params.id);
    CategoryModel.delete({ _id : id }, function(err, result){
        res.send(result);
    })
}