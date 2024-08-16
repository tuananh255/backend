'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InfoWebsite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      InfoWebsite.belongsTo(models.website, { foreignKey: 'infoId', as: 'infos' });

    }
  }
  InfoWebsite.init({
    title: DataTypes.STRING,
    companyName: DataTypes.STRING,
    trusochinh: DataTypes.STRING,
    cn1: DataTypes.STRING,
    cn2: DataTypes.STRING,
    email: DataTypes.STRING,
    tax: DataTypes.STRING,
    infoId: {
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
    modelName: 'InfoWebsite',
  });
  return InfoWebsite;
};