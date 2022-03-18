require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: 'password',
    database: 'task_calendar',
    host: 'db',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: 'password',
    database: 'task_calendar',
    host: 'db',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: 'password',
    database: 'task_calendar',
    host: 'db',
    dialect: 'mysql',
  },
};
