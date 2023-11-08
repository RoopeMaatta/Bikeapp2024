const { Sequelize } = require('sequelize');
require('dotenv').config();

const {
  DB_NAME,
  DB_NAME_TEST,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  NODE_ENV,
} = process.env;

if (!DB_USER || !DB_PASSWORD || !DB_HOST || !DB_PORT || !(DB_NAME || DB_NAME_TEST)) {
  throw new Error('Missing required environment variables for database configuration');
}

const dbName = NODE_ENV  === 'test' ? DB_NAME_TEST : DB_NAME;

const sequelize = new Sequelize(
  dbName,
  DB_USER,
  DB_PASSWORD,
  {
    host: DB_HOST,
    dialect: 'postgres',
    port: DB_PORT,
    logging: false,
  }
);

module.exports = { sequelize };
