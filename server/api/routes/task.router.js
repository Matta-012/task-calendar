const express = require('express');
const taskController = require('../../controllers/task.controller');
const { validateTaskExistence, validateTaskData } = require('../../middlewares');

const router = express.Router();

router.get('/', taskController.getAll);

router.post(
  '/',
  validateTaskData,
  taskController.create
);

router.delete(
  '/:id',
  validateTaskExistence,
  taskController.deleteTask
);

module.exports = router;