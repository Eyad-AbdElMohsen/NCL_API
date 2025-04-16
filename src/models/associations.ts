import { Game, Stadium, Team, TeamGame, Player, Injury } from ".";

// 1 to 1
Stadium.hasOne(Team, { foreignKey: 'stadiumId' });
Team.belongsTo(Stadium, { foreignKey: 'stadiumId' });

// 1 to m
Stadium.hasMany(Game, { foreignKey: 'stadiumId' })
Game.belongsTo(Stadium, { foreignKey: 'stadiumId' })

//m to m
Game.belongsToMany(Team, {
  through: TeamGame,
  foreignKey: 'gameId',
  otherKey: 'teamId'
});
Team.belongsToMany(Game, {
  through: TeamGame,
  foreignKey: 'teamId',
  otherKey: 'gameId'
});

//1 to M
Team.hasMany(Player, { foreignKey: 'teamId'})
Player.belongsTo(Team, { foreignKey: 'teamId'})

//1 to m
Player.hasMany(Player, { as: 'is_captain', foreignKey: 'captainId' });
Player.belongsTo(Player, { as: 'point_to_captain', foreignKey: 'captainId' });

//1 to m 
Player.hasMany(Injury, {foreignKey: 'playerId'})
Injury.belongsTo(Player, { foreignKey: 'playerId'})