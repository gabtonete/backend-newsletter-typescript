"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InMemoryUsersRepository_1 = require("../../repositories/implementations/InMemoryUsersRepository");
const GmailMailProvider_1 = require("../../providers/implementations/GmailMailProvider");
const CreateUserUseCase_1 = require("./CreateUserUseCase");
describe("Create user", () => {
    let usersRepository;
    let mailProvider;
    let createUserUseCase;
    beforeAll(() => {
        usersRepository = new InMemoryUsersRepository_1.InMemoryUsersRepository();
        mailProvider = new GmailMailProvider_1.GmailMailProvider();
        createUserUseCase = new CreateUserUseCase_1.CreateUserUseCase(usersRepository, mailProvider);
    });
    it("should be able to create a new user", async () => {
        const userData = { name: 'Novo Usuário', email: 'novousuario@test.test' };
        const result = await createUserUseCase.execute(userData);
        expect(result).toBe(true);
    });
    it("should not be able to create an existing user", async () => {
        const data = { name: 'Usuário Usado', email: 'naoexabgciste@test.test' };
        await createUserUseCase.execute(data);
        await createUserUseCase.execute(data);
        expect(false);
    });
});
//# sourceMappingURL=CreateUserUseCase.spec.js.map