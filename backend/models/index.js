require('dotenv').config();

const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/config');

// Import models and pass DataTypes
const Station = require('./station')(sequelize, DataTypes);
const Journey = require('./journey')(sequelize, DataTypes);

const models = {
  Station,
  Journey,
};

// Loop through all models and check if they have an associate method
Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

// Export your sequelize instance and models
module.exports = { sequelize, ...models };
