import { DataTypes, Model, Optional } from "sequelize";

export class BaseSchema extends Model {
    constructor(schema:any) {
        super({
            ...schema,
            updatedBy: {
                type: DataTypes.UUIDV4,
            },
            createdBy: {
                type: DataTypes.UUIDV4,
            },
        })
    }
}
