const { Model, DataTypes } = require('sequelize');

// Exports journey model

module.exports = (sequelize) => {
  class Journey extends Model {
    static associate(models) {
      // Define the association to Station here
      Journey.belongsTo(models.Station, { as: 'DepartureStation', foreignKey: 'departure_station_id' });
      Journey.belongsTo(models.Station, { as: 'ReturnStation', foreignKey: 'return_station_id' });
    }
  }

  Journey.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      departure_station_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'station', key: 'id' },
      },
      return_station_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'station', key: 'id' },
      },

      distance: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    // second object to configure the model
    {
      sequelize,
      modelName: "Journey",
      tableName: "journey",
      timestamps: false,
    }
  );
  return Journey
};