"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const UserEntity_1 = require("../../entities/UserEntity");
class CreateUserUseCase {
    constructor(userRepository, mailProvider) {
        this.userRepository = userRepository;
        this.mailProvider = mailProvider;
    }
    async execute(data) {
        const userAlreadyExists = await this.userRepository.findByEmail(data.email);
        if (userAlreadyExists === true) {
            return false;
        }
        else {
            const user = new UserEntity_1.UserEntity(data.name, data.email);
            await this.userRepository.save(user);
            await this.mailProvider.sendMail({
                to: {
                    name: data.name,
                    address: data.email,
                },
                from: {
                    name: 'Gabriel Tonete',
                    address: 'gabtonsmtp@gmail.com',
                },
                subject: 'Welcome to Fake Newsletter!',
                body: '<a href="https://github.com/gabtonete">Acesse aqui meu github!</a>'
            });
            return true;
        }
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
//# sourceMappingURL=CreateUserUseCase.js.map