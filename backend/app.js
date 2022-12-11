const express = require('express');
const userRoutes = require('./routes/userRoutes');
const connectToDB = require('./config/database');
const app = express();

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


connectToDB()

app.use("/" , userRoutes )
// app.use("/createUser" , userRoutes)
// app.use("/getUsers" , userRoutes)
// app.use("/editUser" , userRoutes)
// app.use("/deleteUser" , userRoutes)


module.exports = app