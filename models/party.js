'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Party extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Party.belongsTo(models.Table, {
        foreignKey: 'tableId',
        onDelete: 'CASCADE'
      });
    }
  }
  Party.init({
    numberOfAdults: DataTypes.INTEGER,
    numberOfChildren: DataTypes.INTEGER,
    tableId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Party',
  });
  return Party;
};