'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FeedBack extends Model {
    static associate(models) {
      // Định nghĩa các liên kết ở đây
      FeedBack.belongsTo(models.Home, { foreignKey: 'feedBackHomeId', as: 'home' });
      FeedBack.hasMany(models.feedbackDetails, { foreignKey: 'feedBackId', as: 'details' });
    }
  }
  FeedBack.init({
    title: DataTypes.STRING,
    desription: DataTypes.STRING,
    feedBackHomeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Homes',
        key: 'id'
      },
    },
  }, {
    sequelize,
    modelName: 'FeedBack',
  });
  return FeedBack;
};
