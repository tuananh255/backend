'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cta extends Model {

    static associate(models) {
      Cta.belongsTo(models.Home, { foreignKey: 'ctaId', as: 'ctas' });
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