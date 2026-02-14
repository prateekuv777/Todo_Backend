const service = require("../services/task.service");

exports.createTask = async (req, res) => {
  console.log("req",req.body)
  // console.log("req param id",req.params.id)
  // console.log("res",res)
  // return;
  const task = await service.createTask(req.body);
  console.log("new created Task Data", task)
  res.json(task);
};

exports.getAllTasks = async (req, res) => {
  const tasks = await service.getAllTasks();
  res.json(tasks);
};

exports.getTask = async (req, res) => {
  const task = await service.getTaskByUUID(req.params.uuid);
  res.json(task);
};

exports.updateTask = async (req, res) => {
  const task = await service.updateTask(req.params.uuid, req.body);
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await service.deleteTask(req.params.uuid);
  res.json({ message: "Task deleted" });
};
