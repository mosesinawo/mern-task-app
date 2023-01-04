const dotenv = require("dotenv").config()
const express = require("express");
const connectDB = require("./config/connectDB")
const mongoose = require("mongoose");
const Task = require("./models/taskModel");
const taskRoutes = require("./routes/taskRoute")


const app = express()

//Middleware

app.use(express.json())
app.use(express.urlencoded({extended: false}));  
app.use("/api/tasks",taskRoutes);
// const logger = (req, res, next) =>{
//   console.log("Middleware ran")  
//   console.log(req.method)
//   next()
// } 

//routes
app.get("/", (req, res) =>{
    res.send("Home page");
})


  
connectDB()
const PORT = process.env.PORT || 5000;

mongoose.
  connect(process.env.MONGO_URI)
    .then(() =>{
        app.listen(PORT, () => {
            console.log(`server running on port ${PORT}`)
        })
    })
    .catch((err) => console.log(err))



// const startServer = async () =>{
//   try {
//     await connectDB(); 
//     app.listen(PORT, () => {
//         console.log(`server running on port ${PORT}`)
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }
// startServer();