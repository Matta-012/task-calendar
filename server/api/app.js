require('dotenv').config();
require('express-async-errors');
const express = require('express');

const { taskRouter } = require('./routes/routes');
const errorHandlerMiddleware = require('../middlewares/errorHandler.middleware');


const app = express();

app.use(express.json());

app.use('/tasks', taskRouter);

app.use(errorHandlerMiddleware);

module.exports = app;
