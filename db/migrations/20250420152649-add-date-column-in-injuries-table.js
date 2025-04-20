'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('injuries', 'date', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('injuries', 'date')
  }
};
