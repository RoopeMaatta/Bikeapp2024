const { sequelize } = require('../models');
const seedDatabase = require('./testUtilities/seedTestingDatabase');
require('dotenv').config();

// Setup testing in-memory database

beforeAll(async () => {
  await sequelize.sync({ force: true });
  await seedDatabase();
});

afterAll(async () => {
  await sequelize.close();
});