const { send } = require("process")
var ProductModel = require("../models/ProductModel");
var mongo = require("mongodb");

exports.getAll = (req, res)=>{
    ProductModel.find({}, function(err, result){
        res.send(result);
    });
}

exports.getProduct = (req, res)=>{
    var id = mongo.ObjectId(req.params.id);
    ProductModel.find({ _id : id }, function(err, result){
        res.send(result[0]);
    })
}

exports.add = (req, res)=>{
    delete req.body._id;
    ProductModel.save( req.body , function(err, result){
        res.send(result);
    })
}

exports.update = (req, res)=>{
    var id = mongo.ObjectId(req.params.id);
    delete req.body._id;
    ProductModel.update({ _id : id }, req.body, function(err, result){
        res.send(result.ops[0]);
    })
}

exports.delete = (req, res)=>{
    var id = mongo.ObjectId(req.params.id);
    ProductModel.delete({ _id : id }, function(err, result){
        res.send(result);
    })
}