'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('games', 'hScore', {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: null
    }),
    await queryInterface.changeColumn('games', 'aScore', {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: null
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('games', 'hScore', {
      type: Sequelize.INTEGER,
      allowNull: false
    }),
    await queryInterface.changeColumn('games', 'aScore', {
      type: Sequelize.INTEGER,
      allowNull: false
    })
  }
};
