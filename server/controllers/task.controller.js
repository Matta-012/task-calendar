const { Task } = require('../models');
const { Op } = require('sequelize');

const getAll = async (_req, res) => {
  const taskList = await Task.findAll();

  return res.status(200).json(taskList);
};

const getByQuery = async (req, res) => {
  const { q } = req.query;

  const taskList = await Task.findAll({
    where: {
      title: { [Op.like]: `%${q}%` },
    }
  });

  return res.status(200).json(taskList);
};

const create = async (req, res) => {
  const newTask = await Task.create(req.body);

  return res.status(201).json({ id: newTask.id, ...req.body });
};

const update = async (req, res) => {
  const { id } = req.params;
  const { taskData } = req;
  
  await Task.update({ ...taskData.dataValues, ...req.body }, { where: { id } });

  const updatedResponse = {
    ...taskData.dataValues,
    ...req.body,
  }

  return res.status(200).json(updatedResponse);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  await Task.destroy({ where: { id } });

  return res.status(204).end();
};

module.exports = {
  getAll,
  getByQuery,
  create,
  update,
  deleteTask,
};
