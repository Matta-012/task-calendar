const { Task } = require('../models');

const getAll = async (req, res) => {
  const taskList = await Task.findAll();

  return res.status(200).json(taskList);
};

module.exports = {
  getAll,
};