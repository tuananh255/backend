'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cta.belongsTo(models.Home, { foreignKey: 'homeId', as: 'home' });
    }
  }
  Cta.init({
    title: DataTypes.STRING,
    desription: DataTypes.STRING,
    ctaId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Homes',
        key: 'id'
      },
    },
  }, {
    sequelize,
    modelName: 'Cta',
  });
  return Cta;
};