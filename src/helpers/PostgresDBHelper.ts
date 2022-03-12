import { Sequelize } from 'sequelize';
const { DB_USER, DB_HOST, DB_NAME, DB_PASS } = process.env

export const sequelize = new Sequelize( DB_USER, DB_NAME, DB_PASS, {
    host: DB_HOST,
    dialect: 'postgres'
});

export const synchronize = async () => {
    await sequelize.sync();
}
