const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
};

module.exports = (sequelize) => {
  const Task = sequelize.define(
    'Task',
    Attributes,
    {
      underscored: false,
      timestamps: false,
      tableName: 'Tasks',
    },
  );

  return Task;
};