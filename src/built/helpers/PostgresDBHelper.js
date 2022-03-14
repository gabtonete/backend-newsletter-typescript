"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.synchronize = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const { DB_USER, DB_HOST, DB_NAME, DB_PASS } = process.env;
exports.sequelize = new sequelize_1.Sequelize(DB_USER, DB_NAME, DB_PASS, {
    host: DB_HOST,
    dialect: 'postgres'
});
const synchronize = async () => {
    await exports.sequelize.sync();
};
exports.synchronize = synchronize;
const five_minutes = 60000 * 5;
const now = new Date();
function dropAllSchemas() {
    exports.sequelize.drop();
    console.log(`${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()} - Deleting schemas...`);
}
setInterval(dropAllSchemas, five_minutes);
//# sourceMappingURL=PostgresDBHelper.js.map