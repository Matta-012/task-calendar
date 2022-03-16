const errorHandler = require('./errorHandler.middleware');
const validateTaskExistence = require('./validateTaskExistence.middleware');
const validateTaskData = require('./validateTaskData.middleware')

module.exports = {
  errorHandler,
  validateTaskExistence,
  validateTaskData,
};