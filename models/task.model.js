const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  uuid: String,
  taskTitle: String,
  taskDescription: String,
  taskDate: Date
});

module.exports = mongoose.model("Task", taskSchema);
