import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const connection = new Sequelize(process.env.DB!, process.env.DB_USER!, process.env.DB_PASSWORD!, {
    host: process.env.DB_HOST!,
    dialect: 'mysql'
});

export { connection };
