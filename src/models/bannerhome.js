'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BannerHome extends Model {
    static associate(models) {
      // Tạo quan hệ nhiều-một với Home
      BannerHome.belongsTo(models.Home, { foreignKey: 'homeId', as: 'home' });
    }
  }

  BannerHome.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    img: DataTypes.STRING,
    homeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Homes',
        key: 'id'
      },
    }
  }, {
    sequelize,
    modelName: 'BannerHome',
  });

  return BannerHome;
};
