import {
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
    Sequelize,
} from "sequelize";

export default function (sequelize: Sequelize) {
    class Injury extends Model<
        InferAttributes<Injury>,
        InferCreationAttributes<Injury>
    > {
        id?: number;
        period!: number
        playerId!: number
    }
        
    Injury.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            period: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            playerId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: { model: 'players', key: 'id' }
            }
        },
        {
            sequelize,
            modelName: "Injury",
            tableName: "injuries",
            timestamps: false
        }
    );
    return Injury;
}
