import express from 'express'
import { registerMiddlewares } from './routes/routes'
import connectToPostgresDB from './connections/sequelize-postgres.connection';

export const startServer = async () => {
    try {
        await connectToPostgresDB();

        const app = express()
        registerMiddlewares(app);

        const { PORT } = process.env;
        app.listen(PORT, () => {
            console.log(`SERVER STARTED LISTENING ON PORT ${PORT}`)
        })
    } catch (e) {
        process.exit(1);
    }
}