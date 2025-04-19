import { Game, Stadium, Team, TeamGame, Player, Injury } from ".";

// x belongs to y --> x has y.id as a foreign key

// 1 to 1
Stadium.hasOne(Team, {
  foreignKey: "stadiumId",
  onDelete: "RESTRICT",
});
Team.belongsTo(Stadium, {
  foreignKey: "stadiumId",
});

// 1 to m
Stadium.hasMany(Game, {
  foreignKey: "stadiumId",
  onDelete: "SET NULL",
});
Game.belongsTo(Stadium, {
  foreignKey: "stadiumId",
});

//m to m
Game.belongsToMany(Team, {
  through: TeamGame,
  foreignKey: "gameId",
  otherKey: "teamId",
  onDelete: 'CASCADE'
});
Team.belongsToMany(Game, {
  through: TeamGame,
  foreignKey: "teamId",
  otherKey: "gameId",
  onDelete: "CASCADE",
});

//1 to M
Team.hasMany(Player, {
  foreignKey: "teamId",
  onDelete: "SET NULL",
});
Player.belongsTo(Team, {
  foreignKey: "teamId",
});

//1 to m
Player.hasMany(Player, { 
  as: "is_captain", foreignKey: "captainId",
  onDelete: 'RESTRICT'
});
Player.belongsTo(Player, { 
  as: "has_captain", foreignKey: "captainId",
  onDelete: 'NO ACTION' 
});

//1 to m
Player.hasMany(Injury, { 
  foreignKey: "playerId",
  onDelete: "CASCADE" 
});
Injury.belongsTo(Player, { 
  foreignKey: "playerId"
});
