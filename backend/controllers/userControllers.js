const User = require('../models/userModels');


exports.home = (req, res) => {
    res.send("welcome to home page")
}

exports.createUser = async (req , res) => {
    try {

        const { name , email } = req.body;

        if (!name || !email) {
            throw new Error("Name and Email is required")
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error("User already exists")
        }

        //inserting user to db
        const newUser = await User.create({
            name,
            email
        })
        res.json({
            success: true,
            message: "User Created Successfully",
            newUser,
        })


    } catch (error) {
        console.log(error);
        console.log("error at exports.createUser");
    }
}

exports.getUser = async (req , res) =>{
    try {
        //its not a login its for getting all users

        const existingGetUser = await User.find()
        res.json({
            success:true,
            existingGetUser
        })

    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message,

        })
    }
}

exports.editUser = async (req , res)=>{

    try {

        const editExistingUser = await User.findByIdAndUpdate(req.params.id, req.body)
        res.json({
            success:true,
            message:"Update successfulll"
        })
        
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        })
    }

}

exports.deleteUser = async (req,res) =>{
    try {
        
        const deleteUsers =await User.findByIdAndDelete(req.params.id , req.body)
        res.status(201).json({
            success:true,
            message:"User deleted successfully"
        })

    } catch (error) {
        console.log(error);
        res.staus(401).json({
            succes:false,
            message : error.message
        })
    }
}