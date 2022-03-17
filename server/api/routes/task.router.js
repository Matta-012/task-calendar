const express = require('express');
const taskController = require('../../controllers/task.controller');
const { validateTaskExistence, validateTaskData } = require('../../middlewares');

const router = express.Router();

router.get('/', taskController.getAll);

router.get('/search', taskController.getByQuery);

router.post(
  '/',
  validateTaskData,
  taskController.create
);

router.put(
  '/:id',
  validateTaskData,
  validateTaskExistence,
  taskController.update
);

router.delete(
  '/:id',
  validateTaskExistence,
  taskController.deleteTask
);

module.exports = router;