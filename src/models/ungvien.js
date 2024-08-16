'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ungvien extends Model {
    static associate(models) {
      // Mối quan hệ nhiều-một với bảng "tuyendung"
      Ungvien.belongsTo(models.tuyendung, { foreignKey: 'tuyenDungId', as: 'tuyendung' });
    }
  }

  Ungvien.init({
    name: DataTypes.STRING, // Đổi tên cho phù hợp
    email: DataTypes.STRING, 
    phone: DataTypes.STRING, // sdt
    positionApplied: DataTypes.STRING, // vị trí tuyển dụng
    status: {
      type: DataTypes.ENUM('Đã tuyển', 'Loại', 'Đang phỏng vấn', 'Đã phỏng vấn'),
      defaultValue: 'Đang phỏng vấn'
    },
    cvImage: DataTypes.STRING, // ảnh cv
    contentMessage: DataTypes.STRING, // nội dung tin nhắn
    tuyendungId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tuyendungs',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'Ungvien',
  });

  return Ungvien;
};
