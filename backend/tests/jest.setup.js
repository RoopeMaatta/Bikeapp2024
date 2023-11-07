const { sequelize } = require('../models'); 
const seedDatabase = require('./testUtilities/seedTestingDatabase');
require('dotenv').config();

beforeAll(async () => {
  // If your seedDatabase function is still using pg, you would need to modify it
  // to work with Sequelize instead.
  
  await sequelize.authenticate(); // This checks if the connection is okay
  await sequelize.sync({ force: true }); // This creates the tables by dropping them first if they exist
  // await sequelize.sync(); // This creates the tables by dropping them first if they exist
  await seedDatabase(); // Modify this function to use Sequelize as well

});

beforeEach(async () => {
  // No need for beforeEach if you're not using transactions or similar
});

afterEach(async () => {
  // No need for afterEach if you're not using transactions or similar
});

afterAll(async () => {
  await sequelize.close(); // Close the connection after all tests
});



// const { Pool } = require('pg');
// const seedDatabase = require('./testUtilities/seedTestingDatabase');
// require('dotenv').config();

// // Set up your database connection pool
// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME_TEST,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

// global.pool = pool;
// global.client = null;

// beforeAll(async () => {
//   await seedDatabase(pool);
// });

// beforeEach(async () => {
//   global.client = await pool.connect();
// });

// afterEach(async () => {
//   await global.client.release();
// });

// afterAll(async () => {
//   await pool.end();
// });