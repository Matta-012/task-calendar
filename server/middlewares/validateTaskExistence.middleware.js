const { Task } = require('../models');

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const isTaskFound = await Task.findByPk(id);

  if (!isTaskFound) {
    return res.status(404).json({ message: 'Task not found!' });
  }

  next();
};