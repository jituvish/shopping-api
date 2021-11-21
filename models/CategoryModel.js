var database = require("../config/database");

module.exports.find = function(where, cb){
    database(function(err, con){
        var db = con.db("config");
        db.collection("category").find(where).toArray(cb);
    });
}

module.exports.update = function(where, obj, cb){
    database(function(err, con){
        var db = con.db("config");
        db.collection("category").update(where,{$set : obj}, cb);
    });
}

module.exports.delete = function(where, cb){
    database(function(err, con){
        var db = con.db("config");
        db.collection("category").remove(where, cb);
    });
}

module.exports.save = function(obj, cb){
    database(function(err, con){
        var db = con.db("config");
        db.collection("category").insertOne(obj, cb);
    });
}