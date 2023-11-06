// models/index.js
require('dotenv').config(); // Only if dotenv is not already configured in your entry file

const { Sequelize, DataTypes } = require('sequelize'); // Import Sequelize and DataTypes
const { sequelize } = require('../config/database'); // Adjust the path as necessary

// Import your models and pass DataTypes
const Station = require('./station')(sequelize, DataTypes);
const Journey = require('./journey')(sequelize, DataTypes);

// ... rest of the file remains the same

// Define associations directly in model files to avoid circular dependency issues
// ...

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
