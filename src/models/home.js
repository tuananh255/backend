'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Home extends Model {
    static associate(models) {
      // Tạo quan hệ một-nhiều với BannerHome
      Home.hasMany(models.BannerHome, { foreignKey: 'homeId', as: 'bannerHomes' });
      Home.hasMany(models.WeHome, { foreignKey: 'weHomeId', as: 'weHomes' });
      Home.hasMany(models.Noibat, { foreignKey: 'noibatId', as: 'noibats' });
      Home.hasMany(models.FeedBack, { foreignKey: 'feedBackHomeId', as: 'feedBacks' });
      Home.hasMany(models.News, { foreignKey: 'newsHomeId', as: 'news' });
      Home.hasMany(models.Cta, { foreignKey: 'ctaId', as: 'ctas' });
    }
  }

  Home.init({
    home: DataTypes.STRING,
    viewCount: DataTypes.INTEGER // kiểm tra lượng truy cập
   }, {
    sequelize,
    modelName: 'Home',
  });

  return Home;
};
