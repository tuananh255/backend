'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Baiviet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Baiviet.init({
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    description: DataTypes.STRING,
    linhvuc: DataTypes.STRING,
    content: DataTypes.STRING,
    imgThumbnail: DataTypes.STRING,
    metaTitle: DataTypes.STRING,
    metaDescription: DataTypes.STRING,
    viewCount: DataTypes.INTEGER // kiểm tra lượng truy cập
  }, {
    sequelize,
    modelName: 'Baiviet',
  });
  return Baiviet;
};