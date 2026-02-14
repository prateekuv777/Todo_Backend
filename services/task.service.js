const repo = require("../repositories/task.repository");
const { v4: uuidv4 } = require("uuid");

async function createTask(data) {
  data.uuid = uuidv4();
  return await repo.createTask(data);
}

async function getAllTasks() {
  return await repo.getAllTasks();
}

async function getTaskByUUID(uuid) {
  return await repo.getTaskByUUID(uuid);
}

async function updateTask(uuid, data) {
  return await repo.updateTask(uuid, data);
}

async function deleteTask(uuid) {
  return await repo.deleteTask(uuid);
}

module.exports = {
  createTask,
  getAllTasks,
  getTaskByUUID,
  updateTask,
  deleteTask
};
