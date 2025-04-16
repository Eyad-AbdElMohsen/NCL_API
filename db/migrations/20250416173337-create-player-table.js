'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('players', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      playerName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      SkillLVL: {
        type: Sequelize.ENUM('1', '2', '3', '4', '5'),
        allowNull: false
      },
      position: {
        type: Sequelize.ENUM('GK', 'CB', 'LB', 'RB', 'CM', 'CDM', 'CAM', 'ST', 'LW', 'RW'),
        allowNull: false
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('players')
  }
};
