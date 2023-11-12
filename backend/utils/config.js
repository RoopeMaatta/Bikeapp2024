const { Sequelize } = require('sequelize');
require('dotenv').config();

// Database connection setup with Sequelize, supporting both test and production environments


const {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  NODE_ENV,
} = process.env;

// When not in test environment, ensure all required variables are present
if (NODE_ENV !== 'test' && (!DB_USER || !DB_PASSWORD || !DB_HOST || !DB_PORT || !DB_NAME)) {
  throw new Error('Missing required environment variables for database configuration');
}

let sequelize;
if (NODE_ENV === 'test') {
  // For test environment, use SQLite in-memory database
  sequelize = new Sequelize('sqlite::memory:', { logging: false });
} else {
  // Regular database configuration for non-test environments
  sequelize = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    {
      host: DB_HOST,
      dialect: 'postgres',
      port: DB_PORT,
      logging: false,
    }
  );
}

module.exports = { sequelize };
