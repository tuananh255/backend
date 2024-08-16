'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class feedbackDetails extends Model {
    static associate(models) {
      feedbackDetails.belongsTo(models.FeedBack, { foreignKey: 'feedBackId', as: 'feedback' });
    }
  }
  feedbackDetails.init({
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
    modelName: 'feedbackDetails',
  });
  return feedbackDetails;
};
