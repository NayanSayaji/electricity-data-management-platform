import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.POSTGRES_DB_URL ,{
    dialect: 'postgres',
    logging:false
});

console.log(sequelize)