'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Noibats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      desription: {
        type: Sequelize.STRING
      },
      noibatId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Homes', // Tên bảng chính
          key: 'id' // Khóa chính trong bảng 'Homes'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      title1: {
        type: Sequelize.STRING
      },
      desription1: {
        type: Sequelize.STRING
      },
      title2: {
        type: Sequelize.STRING
      },
      desription2: {
        type: Sequelize.STRING
      },
      title3: {
        type: Sequelize.STRING
      },
      desription3: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Noibats');
  }
};