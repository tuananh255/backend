'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM,
      values: ['Đang hoạt động', 'Không hoạt động'], // Các giá trị cho enum
      defaultValue: 'Không hoạt động' // Giá trị mặc định
    },
    password: DataTypes.STRING,
    role: {
      type: DataTypes.ENUM,
      values: ['Admin', 'Nhân viên', 'Người dùng'], // Các giá trị cho enum
      defaultValue: 'Người dùng' // Giá trị mặc định
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};