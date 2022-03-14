"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresUsersRepository = void 0;
const PostgresDBHelper_1 = require("../../helpers/PostgresDBHelper");
const User_1 = require("../../models/User");
class PostgresUsersRepository {
    async findByEmail(emailParam) {
        (0, PostgresDBHelper_1.synchronize)();
        const userDb = await User_1.User.findAll({ where: { email: emailParam } });
        if (userDb.length) {
            return true;
        }
    }
    async save(user) {
        (0, PostgresDBHelper_1.synchronize)();
        await User_1.User.create({ id: user.id, name: user.name, email: user.email });
    }
}
exports.PostgresUsersRepository = PostgresUsersRepository;
//# sourceMappingURL=PostgresUsersRepository.js.map