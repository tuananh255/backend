'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nhansu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Nhansu.init({
    name: DataTypes.STRING,
    vitri: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    review: DataTypes.STRING,
    kinhnghiem: DataTypes.STRING,
    hocvan: DataTypes.STRING,
    thanhtich: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Nhansu',
  });
  return Nhansu;
};