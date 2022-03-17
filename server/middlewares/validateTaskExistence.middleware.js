const { Task } = require('../models');

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const findTask = await Task.findByPk(id);

  if (!findTask) {
    return res.status(404).json({ message: 'Task not found!' });
  }

  req.taskData = findTask;
  next();
};