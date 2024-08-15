'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      News.belongsTo(models.Home, { foreignKey: 'homeId', as: 'home' });
    }
  }
  News.init({
    title: DataTypes.STRING,
    desription: DataTypes.STRING,
    newsHomeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Homes',
        key: 'id'
      },
    },
    title1: DataTypes.STRING,
    desription1: DataTypes.STRING,
    img1: DataTypes.STRING,
    title2: DataTypes.STRING,
    desription2: DataTypes.STRING,
    img2: DataTypes.STRING,
    title3: DataTypes.STRING,
    desription3: DataTypes.STRING,
    img3: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'News',
  });
  return News;
};