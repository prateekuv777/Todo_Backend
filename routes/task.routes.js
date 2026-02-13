const express = require("express");
const router = express.Router();
const controller = require("../controllers/task.controller");

router.post("/tasks", controller.createTask);
router.get("/tasks", controller.getAllTasks);
router.get("/tasks/:uuid", controller.getTask);
router.put("/tasks/:uuid", controller.updateTask);
router.delete("/tasks/:uuid", controller.deleteTask);

module.exports = router;
