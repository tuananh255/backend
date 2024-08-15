'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WeHome extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      WeHome.belongsTo(models.Home, { foreignKey: 'weHomeId', as: 'home' });

    }
  }
  WeHome.init({
    title: DataTypes.STRING,
    desription: DataTypes.STRING,
    weHomeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Homes',
        key: 'id'
      },
    }
  }, {
    sequelize,
    modelName: 'WeHome',
  });
  return WeHome;
};