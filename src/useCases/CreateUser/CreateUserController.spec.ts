import { InMemoryUsersRepository } from '../../repositories/implementations/InMemoryUsersRepository';
import { GmailMailProvider } from '../../providers/implementations/GmailMailProvider';
import { CreateUserUseCase } from './CreateUserUseCase';
import { IMailProvider } from '../../providers/IMailProvider';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { CreateUserController } from './CreateUserController';


describe("Create user", () => {
    
  let usersRepository: IUsersRepository;
  let mailProvider: IMailProvider;
  let createUserUseCase: CreateUserUseCase;

  beforeAll(() => {
    usersRepository = new InMemoryUsersRepository();
    mailProvider = new GmailMailProvider();
    createUserUseCase = new CreateUserUseCase(usersRepository, mailProvider);

    let createUserController = new CreateUserController(createUserUseCase);
  });

  it("should be able to create a new user", async () => {
    const userData = { name: 'usuarioNovo', email: 'novousuario@test.test', password: '123456' }

    await createUserUseCase.execute(userData);
  });

  it("should not be able to create an existing user", async () => {
    const data = {name:'abc',email:'naoexabgciste@test.test',password:'123456'}
    
    async function received() {
      await createUserUseCase.execute(data);
      await createUserUseCase.execute(data)
    }

    expect(received).rejects.toEqual(new Error("User already exists"));
  });
});
