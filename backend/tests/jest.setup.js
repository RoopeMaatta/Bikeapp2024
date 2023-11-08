const { sequelize } = require('../models');
const seedDatabase = require('./testUtilities/seedTestingDatabase');
require('dotenv').config();

beforeAll(async () => {
  await sequelize.authenticate();
  await sequelize.sync({ force: true });
  await seedDatabase();

});

afterAll(async () => {
  await sequelize.close();
});
