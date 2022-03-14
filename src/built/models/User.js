"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const PostgresDBHelper_1 = require("../helpers/PostgresDBHelper");
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: PostgresDBHelper_1.sequelize,
    modelName: 'User'
});
(0, PostgresDBHelper_1.synchronize)();
//# sourceMappingURL=User.js.map