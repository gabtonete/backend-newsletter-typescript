import { Sequelize } from 'sequelize';
const { DB_USER, DB_HOST, DB_NAME, DB_PASS } = process.env

export const sequelize = new Sequelize( DB_USER, DB_NAME, DB_PASS, {
    host: DB_HOST,
    dialect: 'postgres'
});

export const synchronize = async () => {
    await sequelize.sync();
}

const five_minutes = 60000 * 5;
const now = new Date();

async function dropAllSchemas () {
    await sequelize.drop();
    await sequelize.sync();
    console.log(`${now.getDate()}/${now.getMonth() +1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()} - Deleting schemas...`)
}

setInterval(dropAllSchemas, five_minutes);