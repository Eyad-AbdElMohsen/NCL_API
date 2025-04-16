import {
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
    Sequelize,
} from "sequelize";

export default function (sequelize: Sequelize) {
    class Stadium extends Model<
        InferAttributes<Stadium>,
        InferCreationAttributes<Stadium>
    > {
        id?: number;
        city!: string
    }
        
    Stadium.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            city: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Stadium",
            tableName: "stadiums",
            timestamps: false
        }
    );
    return Stadium;
}
