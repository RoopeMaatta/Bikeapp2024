const { Model, DataTypes } = require('sequelize');

// export placeholder function for model definition
module.exports = (sequelize, DataTypes) => {
    class Station extends Model {}

    Station.init( 
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            station_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            station_address: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            coordinate_x: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            coordinate_y: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
        },
        // second object to configure the model
        {
            sequelize,
            modelName: "Station",
            tableName: "station",
            timestamps: false, 
        }
    );

    return Station;
};
