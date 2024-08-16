'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class tuyendung extends Model {
    static associate(models) {
      // Mối quan hệ một-nhiều với bảng "Ungvien"
      tuyendung.hasMany(models.Ungvien, { foreignKey: 'tuyenDungId', as: 'ungviens' });
      // Mối quan hệ một-nhiều với bảng "postTuyenDung"
      tuyendung.hasMany(models.postTuyenDung, { foreignKey: 'postTdId', as: 'postTuyenDungs' });
    }
  }

  tuyendung.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tuyendung',
  });

  return tuyendung;
};
