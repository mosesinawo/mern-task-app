const express = require("express");
const router = express.Router()
const Task = require("../models/taskModel");
const { 
    createTask,
    getTasks,
    getTask,
    deleteTask, 
    updateTask} = require("../controllers/taskController");

    // router.route("/").get(getTasks).post(createTask)
    // router.route("/:id").get(getTask).delete(deleteTask).
    // put(updateTask)

//Create a task
router.post("/", createTask) 
  // Get/Read Tasks
router.get("/", getTasks)
//Get task
router.get("/:id", getTask) 
//delete task
router.delete("/:id", deleteTask) 
//Update task
router.put("/:id", updateTask) 

module.exports = router;  