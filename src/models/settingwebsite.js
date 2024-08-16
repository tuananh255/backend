'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class settingWebsite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      settingWebsite.belongsTo(models.website, { foreignKey: 'settingId', as: 'settings' });

    }
  }
  settingWebsite.init({
    title: DataTypes.STRING,
    logo: DataTypes.STRING,
    favicon: DataTypes.STRING,
    ngonngu: DataTypes.STRING,
    settingId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'websites',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'settingWebsite',
  });
  return settingWebsite;
};