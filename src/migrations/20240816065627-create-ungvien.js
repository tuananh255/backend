'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ungviens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false // Có thể cần phải có thông tin bắt buộc
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true // Đảm bảo email là duy nhất
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      positionApplied: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('Đã tuyển', 'Loại', 'Đang phỏng vấn', 'Đã phỏng vấn'),
        defaultValue: 'Đang phỏng vấn'
      },
      cvImage: {
        type: Sequelize.STRING
      },
      tuyendungId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tuyendungs',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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
    await queryInterface.dropTable('Ungviens');
  }
};
