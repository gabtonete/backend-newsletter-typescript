"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const uuidv4_1 = require("uuidv4");
class UserEntity {
    constructor(name, email) {
        this.id = (0, uuidv4_1.uuid)();
        this.name = name;
        this.email = email;
    }
}
exports.UserEntity = UserEntity;
//# sourceMappingURL=UserEntity.js.map