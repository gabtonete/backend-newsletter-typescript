"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryUsersRepository = void 0;
class InMemoryUsersRepository {
    constructor() {
        this.users = [];
    }
    async findByEmail(emailReceived) {
        const userExist = this.users.some(user => user.email === emailReceived);
        if (userExist) {
            return true;
        }
    }
    async save(user) {
        this.users.push(user);
    }
}
exports.InMemoryUsersRepository = InMemoryUsersRepository;
//# sourceMappingURL=InMemoryUsersRepository.js.map