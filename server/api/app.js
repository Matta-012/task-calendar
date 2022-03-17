require('dotenv').config();
require('express-async-errors');
const express = require('express');
const cors = require('cors');

const { taskRouter } = require('./routes/routes');
const { errorHandler } = require('../middlewares');


const app = express();

app.use(express.json());
app.use(cors());

app.use('/tasks', taskRouter);

app.use(errorHandler);

module.exports = app;
