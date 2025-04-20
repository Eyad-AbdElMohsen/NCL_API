import {
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
    Sequelize,
} from "sequelize";

export default function (sequelize: Sequelize) {
    class Player extends Model<
        InferAttributes<Player>,
        InferCreationAttributes<Player>
    > {
        id?: number;
        playerName!: string;
        age!: number;
        SkillLVL!: string;
        position!: string;
        teamId?: number;
        captainId?: number | null
    }
        
    Player.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            playerName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            SkillLVL: {
                type: DataTypes.ENUM('1', '2', '3', '4', '5'),
                allowNull: false
            },
            position: {
                type: DataTypes.ENUM('GK', 'CB', 'LB', 'RB', 'CM', 'CDM', 'CAM', 'ST', 'LW', 'RW'),
                allowNull: false
            },
            teamId: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {model: 'teams', key: 'id'},
            },
            captainId: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {model: 'players', key: 'id'}
            }
        },
        {
            sequelize,
            modelName: "Player",
            tableName: "players",
            timestamps: false
        }
    );
    return Player;
}
