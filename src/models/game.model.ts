import {
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
    Sequelize,
} from "sequelize";

export default function (sequelize: Sequelize) {
    class Game extends Model<
        InferAttributes<Game>,
        InferCreationAttributes<Game>
    > {
        id?: number;
        date!: Date;
        hScore?: number;
        aScore?: number;
        stadiumId!: number;
    }
        
    Game.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            hScore: {
                type: DataTypes.NUMBER,
                allowNull: true,
                defaultValue: null
            },
            aScore: {
                type: DataTypes.NUMBER,
                allowNull: true,
                defaultValue: null
            },
            stadiumId: {
                type: DataTypes.NUMBER,
                allowNull: true,
                references: { model: 'stadiums', key: 'id' }
            },
        },
        {
            sequelize,
            modelName: "Game",
            tableName: "games",
            timestamps: false
        }
    );
    return Game;
}
