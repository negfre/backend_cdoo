const {Sequelize, DataTypes} = require('sequelize');
const db = require('../database/config');

const BlogModel = db.define('blogs', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.STRING
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.DATE('CURRENT_TIMESTAMP'),
    allowNull: false
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.DATE('CURRENT_TIMESTAMP'),
    allowNull: false
  }
});

module.exports = { BlogModel };
