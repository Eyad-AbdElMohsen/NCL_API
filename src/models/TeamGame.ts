import {
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
    Sequelize,
} from "sequelize";

export default function (sequelize: Sequelize) {
    class TeamGame extends Model<
        InferAttributes<TeamGame>,
        InferCreationAttributes<TeamGame>
    > {
        teamId!: number;
        gameId!: number;
        role!: string;
    }
      
    TeamGame.init(
        {
            teamId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            gameId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            role: {
                type: DataTypes.ENUM('H', 'A'),
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "TeamGame",
            tableName: "teamsgames",
            timestamps: false
        }
    );
    return TeamGame;
}
