const { Sequelize } = require('sequelize');
require('dotenv').config();


const db = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect:'mysql'
  });

  try {
    db.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    throw new Error('Error a la hora de inicializar BD');
  }




  module.exports =  db;
  