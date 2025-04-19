'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('teams', 'stadiumId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'stadiums',
        key: 'id'
      },
      onDelete: 'RESTRICT',
    });

    await queryInterface.changeColumn('games', 'stadiumId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'stadiums',
        key: 'id'
      },
      onDelete: 'SET NULL',
    });

    await queryInterface.changeColumn('teamsgames', 'gameId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'games',
        key: 'id'
      },
      onDelete: 'CASCADE',
    });

    await queryInterface.changeColumn('teamsgames', 'teamId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'teams',
        key: 'id'
      },
      onDelete: 'CASCADE',
    });

    await queryInterface.changeColumn('players', 'teamId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'teams',
        key: 'id'
      },
      onDelete: 'SET NULL',
    });

    await queryInterface.changeColumn('players', 'captainId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'players',
        key: 'id'
      },
      onDelete: 'RESTRICT',
    });


    await queryInterface.changeColumn('injuries', 'playerId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'players',
        key: 'id'
      },
      onDelete: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('teams', 'stadiumId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'stadiums',
        key: 'id'
      },
    });

    await queryInterface.changeColumn('games', 'stadiumId', {
      type: Sequelize.INTEGER,
      allowNull: true, 
      references: {
        model: 'stadiums',
        key: 'id'
      },
    });

    await queryInterface.changeColumn('TeamGames', 'gameId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'games',
        key: 'id'
      },
    });

    await queryInterface.changeColumn('TeamGames', 'teamId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'teams',
        key: 'id'
      },
    });

    await queryInterface.changeColumn('players', 'teamId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'teams',
        key: 'id'
      },
    });

    await queryInterface.changeColumn('players', 'captainId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'players',
        key: 'id'
      },
    });

    await queryInterface.changeColumn('injuries', 'playerId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'players',
        key: 'id'
      },
    });
  }
};

