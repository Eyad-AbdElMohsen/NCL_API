'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('teams', 'stadiumId', {
      type: Sequelize.INTEGER,
      unique: true
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('teams', 'stadiumId', {
      type: Sequelize.INTEGER,
      unique: false,
    })
  }
};
