import { UserEntity } from "../../entities/UserEntity";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(
        private userRepository: IUsersRepository,
        private mailProvider: IMailProvider
    ) {}


    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.userRepository.findByEmail(data.email);
        if(userAlreadyExists) {
            throw new Error('User already exists');
        }

        const user = new UserEntity( data.name, data.email );
        await this.userRepository.save(user);
        
        /*await this.mailProvider.sendMail({
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
        })*/
    }
}