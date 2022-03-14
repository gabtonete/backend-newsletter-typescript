"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PostgresUsersRepository_1 = require("../../repositories/implementations/PostgresUsersRepository");
const GmailMailProvider_1 = require("../../providers/implementations/GmailMailProvider");
const CreateUserUseCase_1 = require("./CreateUserUseCase");
describe("Create user", () => {
    let usersRepository;
    let mailProvider;
    let createUserUseCase;
    beforeAll(() => {
        usersRepository = new PostgresUsersRepository_1.PostgresUsersRepository();
        mailProvider = new GmailMailProvider_1.GmailMailProvider();
        createUserUseCase = new CreateUserUseCase_1.CreateUserUseCase(usersRepository, mailProvider);
    });
    it("should be able to create a new user", async () => {
        const userData = { name: 'usuarioNovo', email: 'novousuario@test.test' };
        await createUserUseCase.execute(userData);
    });
    it("should not be able to create an existing user", async () => {
        const data = { name: 'abc', email: 'naoexabgciste@test.test' };
        async function received() {
            await createUserUseCase.execute(data);
            await createUserUseCase.execute(data);
        }
        expect(received).rejects.toEqual(new Error("User already exists"));
    });
});
//# sourceMappingURL=CreateUserUseCase.spec.js.map