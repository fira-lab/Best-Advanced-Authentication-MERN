const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");


const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add a name"]
        },
        email: {
            type: String,
            required: [true, "Please add an email"],
            unique: true,
            trim: true,
            
            
            match: [
               /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
               "Please enter a valid Email",
  ],

        }, password: {
            type: String,
            required: [true, "Please add a password"]
        },
        photo: {
            type: String,
            required: [true, "Please add a name"],
            default: "https://github.com/fira-lab/Best-Advanced-Authentication-MERN/blob/main/frontend/src/assets/avatarr.png"
        },
         phone: {
            type: String,
            default: "+251"
        }
        , bio: {
            type: String,
            default: "bio"
                
        
        },
        role: {
            type: String,
            default: "subscriber"
                },

        isVerified: {
            type: Boolean,
            required: true,
            default: false
                },
        userAgent:{
            type: Array,
            required: true,
            default: []
        }
                

    },
    {
        timestamps: true,
        minimize: false

    }
)

// Encrypting the password before saving

userSchema.pre("save", async function(next){
    if (!this.isModified("password")){
        return next();



    }
    // Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(this.password, salt)
    this.password = hashedPassword;
    next();


});

const User = mongoose.model("User", userSchema)
module.exports = User;