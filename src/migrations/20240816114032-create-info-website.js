'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('InfoWebsites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      companyName: {
        type: Sequelize.STRING
      },
      trusochinh: {
        type: Sequelize.STRING
      },
      cn1: {
        type: Sequelize.STRING
      },
      cn2: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      tax: {
        type: Sequelize.STRING
      },
      infoId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'websites',
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
    await queryInterface.dropTable('InfoWebsites');
  }
};