const { Task } = require('../models');

const getAll = async (_req, res) => {
  const taskList = await Task.findAll();

  return res.status(200).json(taskList);
};

const create = async (req, res) => {
  const newTask = await Task.create(req.body);

  return res.status(201).json({ id: newTask.id, ...req.body });
};

const update = async (req, res) => {
  const taskList = await Task.findAll();

  return res.status(200).json(taskList);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  await Task.destroy({ where: { id } });

  return res.status(204).end();
};

module.exports = {
  getAll,
  create,
  update,
  deleteTask,
};