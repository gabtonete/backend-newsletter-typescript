"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserController = exports.createUserUseCase = void 0;
const GmailMailProvider_1 = require("../../providers/implementations/GmailMailProvider");
const PostgresUsersRepository_1 = require("../../repositories/implementations/PostgresUsersRepository");
const CreateUserController_1 = require("./CreateUserController");
const CreateUserUseCase_1 = require("./CreateUserUseCase");
const gmailMailProvider = new GmailMailProvider_1.GmailMailProvider();
const postgresUsersRepository = new PostgresUsersRepository_1.PostgresUsersRepository();
const createUserUseCase = new CreateUserUseCase_1.CreateUserUseCase(postgresUsersRepository, gmailMailProvider);
exports.createUserUseCase = createUserUseCase;
const createUserController = new CreateUserController_1.CreateUserController(createUserUseCase);
exports.createUserController = createUserController;
//# sourceMappingURL=index.js.map