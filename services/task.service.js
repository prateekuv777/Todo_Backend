const repo = require("../repositories/task.repository");
const { v4: uuidv4 } = require("uuid");

exports.createTask = async (data) => {
  data.uuid = uuidv4();
  return repo.createTask(data);
};

exports.getAllTasks = () => repo.getAllTasks();

exports.getTaskByUUID = (uuid) => repo.getTaskByUUID(uuid);

exports.updateTask = (uuid, data) => repo.updateTask(uuid, data);

exports.deleteTask = (uuid) => repo.deleteTask(uuid);
