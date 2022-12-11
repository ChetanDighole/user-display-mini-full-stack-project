const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name : {
        type: String,
        require:[true , "Name required"],
        maxlength:[25 , "name not nore then 25 character" ],
        trim:true,
    },
    email : {
        type: String,
        unique:true,
        require:[true , "Email required"]
    },

});

module.exports = mongoose.model("User" , userSchema)
