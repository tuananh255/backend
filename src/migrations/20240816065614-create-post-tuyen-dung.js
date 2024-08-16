'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('postTuyenDungs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false // Có thể cần thông tin bắt buộc
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false // Có thể cần thông tin bắt buộc
      },
      postTdId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tuyendungs', // Tên bảng chính
          key: 'id' // Khóa chính trong bảng 'tuyendungs'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      expireDate: {
        allowNull: false, // Có thể cần thông tin bắt buộc
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('postTuyenDungs');
  }
};
