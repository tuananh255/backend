'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class postTuyenDung extends Model {
    static associate(models) {
      // Mối quan hệ nhiều-một với bảng "tuyendung"
      postTuyenDung.belongsTo(models.tuyendung, { foreignKey: 'postTdId', as: 'tuyendung' });
    }
  }

  postTuyenDung.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    expireDate: DataTypes.DATEONLY, // Sử dụng DataTypes.DATEONLY để lưu ngày hết hạn
    postTdId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tuyendungs', // Tên bảng liên kết
        key: 'id'
      },
      onDelete: 'CASCADE', // Xóa bài đăng khi bản ghi trong bảng tuyendung bị xóa
      onUpdate: 'CASCADE'  // Cập nhật khi khóa ngoại bị thay đổi
    }
  }, {
    sequelize,
    modelName: 'postTuyenDung',
  });

  return postTuyenDung;
};
