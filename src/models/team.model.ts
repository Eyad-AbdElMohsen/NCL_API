import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    DataTypes,
    Sequelize,
} from "sequelize";

export default function (sequelize: Sequelize) {
    class Team extends Model<
        InferAttributes<Team>,
        InferCreationAttributes<Team>
    > {
        id?: number;
        teamName!: string;
        city!: string;
        coach!: string;
        stadiumId!: number;
    }

    // Realationships


    Team.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            teamName: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            city: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            coach: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            stadiumId: {
                type: DataTypes.INTEGER,
                allowNull: true,
                unique: true,
                references: { model: 'stadiums', key: 'id' }
            },
        },
        {
            sequelize,
            modelName: "Team",
            tableName: 'teams',
            timestamps: false
        }
    );
    return Team
}
