'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane, {
        foreignKey: 'airplaneId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      this.belongsTo(moadels.Airport, {
        foreignKey: 'departureAirportId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      this.belongsTo(moadels.Airport, {
        foreignKey: 'arrivalAirportId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Flight.init({
    flightNumber: {
      types: DataTypes.STRING,
      allowNull: false,
    },
    airplaneId: {
      types: DataTypes.INTEGER,
      allowNull: false,
    },
    departureAirportId: {
      types: DataTypes.STRING,
      allowNull: false,
    },
    arrivalAirportId: {
      types: DataTypes.STRING,
      allowNull: false,
    },
    arrivalTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    departureTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    price: {
      types: DataTypes.INTEGER,
      allowNull: false,
    },
    boardingGate: {
      types: DataTypes.STRING,
    },
    totalSeats: {
      types: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};