import { sequelize } from "./sequelize.global.instance";

const connectToPostgresDB = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync(); 
        console.log('Postgres Database connected successfully using sequelize')
    } catch (e) {
        console.log(e)
        throw 'Error Connecting Database';
    }
}

export default connectToPostgresDB;