'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FeedBackDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      FeedBackDetail.belongsTo(models.FeedBack, { foreignKey: 'feedBackId', as: 'feedback' });
    }
  }
  FeedBackDetail.init({
    feedBackId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'FeedBacks',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    title: DataTypes.STRING,
    desription: DataTypes.STRING,
    img: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'FeedBackDetail',
  });
  return FeedBackDetail;
};
