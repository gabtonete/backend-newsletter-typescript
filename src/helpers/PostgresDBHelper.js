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
//# sourceMappingURL=PostgresDBHelper.js.map