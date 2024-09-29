const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // For SQLite. For MySQL/PostgreSQL, replace with proper configuration.
});

module.exports = sequelize;
