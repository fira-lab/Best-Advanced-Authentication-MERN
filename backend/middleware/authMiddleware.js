const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const protect = asyncHandler(async (req, res, next) =>{
    try {

        const token = req.cookies.token
        if (!token){
            res.status(401);
            throw new Error("Not Authorized, please login");
        }

        // Verify token

        const verfied = jwt.verify(token, process.env.JWT_SECRET);

        //  get user id from token

        const user = await User.findById(verified.id).select("-password")

        if(!user){
            res.status(404);
            throw new Error("User not found");

        }
        if(!user.role=== "suspended"){
            res.status(400);
            throw new Error("User Suspended, please contact support");

        }

        req.user = user
        next()

    }catch (error){

        res.status(401);
        throw new Error("Not Authorized, please login");


    }
});

module.exports = {
    protect,

}