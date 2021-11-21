var jwt = require("jsonwebtoken");
exports.index = (req, res)=>{
    var token = req.headers.authorization;
    var info = jwt.verify(token, "The Stepping Store");
    if(info)
    {
        console.log("xxxxxxxxxxxxxxxxxxxxxxxx");
    }
    else
    {
        console.log("--------------", info)
    }

}