const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils");
var parser = require('ua-parser-js');




// for register
const registerUser = asyncHandler(async (req, res) => {
   

    const {name,email,password} = req.body;
    // Validation

    if (!name || !email || !password){
        res.status(400)
        throw new Error("Please fill in all the required fields.");

    }

    if(password.length <8){
        res.status(400)
        throw new Error("Password must be up to 8 characters.");

    }
    // Check if user exits
    const userExits = await User.findOne({email})
    if (userExits){
        res.status(400)
        throw new Error("Email already in use.");
    }
    // Get User Agent
    const ua = parser(req.headers['user-agent']);
    const userAgent= [ua.ua]


    // Create a new User
    const user = await User.create({
        name,
        email,
        password,
        userAgent,
    });

    // Exited to generate Token

    const token = generateToken(user._id)

    // send HRRP-only cookie

    res.cookie("token", token,{
        path:"/",
        httpOnly:true,
        expires:new Date(Date.now() + 1000* 86400),//one day
        sameSite:"none",
        secure: true,

    })

    if (user){
        const {_id, name, email, phone, bio, photo,role,isVerified,token} = user

        res.status(201).json({
            _id, name, email, phone, bio, photo,role,isVerified,token

        })
    }else{
        res.status(400);
        throw new Error("Invalid user");
    }
});

const loginUser = asyncHandler(async (req, res) => {
    // ...
    
    const { email, password } = req.body
    const user = await User.findOne({ email });

    if (!user){
        res.status(404);
        throw new Error("User not found, please signup");
    }
    
    const passwordIsCorrect = await bcrypt.compare(password, user.password)

    if (!passwordIsCorrect){
        res.status(400);
        throw new Error("Invalid email or password");

        
    }

   

    const token = generateToken(user._id);
    if (user && passwordIsCorrect) {
        res.cookie("token", token, {
            path: "/",
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 86400), //one day
            sameSite: "none",
            secure: true,
        });

        const {
            _id,
            name,
            email,
            phone,
            bio,
            photo,
            role,
            isVerified,
        } = user;

        res.status(201).json({
            _id,
            name,
            email,
            phone,
            bio,
            photo,
            role,
            isVerified,
            token,
        });
    } 
    
   

    
    else {
        res.status(500);
        throw new Error("Something went wrong, please try again");
    }
});

// Logout User

const logoutUser = asyncHandler(async (req, res) =>
{
    res.cookie("token", "", {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now(0)), //one day
        sameSite: "none",
        secure: true,
    });
    return res.status(200).json({message:"Logout Successfully"});

});

// Get user

const getUser = asyncHandler(async(req, res) =>{
    const user = await User.findById(req.user._id)

    if (user){

        res.status(200).json({
            _id,
            name,
            email,
            phone,
            bio,
            photo,
            role,
            isVerified,
            token,
        });


    }else{

        res.status(404)
        throw new Error("User not found");

    }
});

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    getUser,

};
