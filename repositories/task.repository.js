const Task = require("../models/task.model");

exports.createTask = (data) => Task.create(data);

exports.getAllTasks = () => Task.find();

exports.getTaskByUUID = (uuid) => Task.findOne({ uuid });

exports.updateTask = (uuid, data) =>
  Task.findOneAndUpdate({ uuid }, data, { new: true });

exports.deleteTask = (uuid) =>
  Task.findOneAndDelete({ uuid });
