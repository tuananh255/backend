'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class website extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      website.hasMany(models.InfoWebsite, { foreignKey: 'infoId', as: 'infos' });
      // Mối quan hệ một-nhiều với bảng "postTuyenDung"
      website.hasMany(models.settingWebsite, { foreignKey: 'settingId', as: 'settings' });
    }
  }
  website.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'website',
  });
  return website;
};