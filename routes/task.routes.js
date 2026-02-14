const express = require("express");
const router = express.Router();
const controller = require("../controllers/task.controller");
const verifyToken = require("../middleware/auth.middleware");

router.post("/", verifyToken, controller.createTask);
router.get("/", verifyToken, controller.getAllTasks);
router.get("/:uuid", verifyToken, controller.getTask);
router.put("/:uuid", verifyToken, controller.updateTask);
router.delete("/:uuid", verifyToken, controller.deleteTask);

module.exports = router;
