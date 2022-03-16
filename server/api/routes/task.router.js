const express = require('express');
const taskController = require('../../controllers/task.controller');

const router = express.Router();

router.get('/', taskController.getAll);

module.exports = router;