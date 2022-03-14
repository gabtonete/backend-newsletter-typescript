import { InMemoryUsersRepository } from '../../repositories/implementations/InMemoryUsersRepository';
import { GmailMailProvider } from '../../providers/implementations/GmailMailProvider';
import { CreateUserUseCase } from './CreateUserUseCase';
import { IMailProvider } from '../../providers/IMailProvider';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { ICreateUserRequestDTO } from "./CreateUserDTO";


describe("Create user", () => {
  let usersRepository: IUsersRepository;
  let mailProvider: IMailProvider;
  let createUserUseCase: CreateUserUseCase;

  beforeAll(() => {
    usersRepository = new InMemoryUsersRepository();
    mailProvider = new GmailMailProvider();
    createUserUseCase = new CreateUserUseCase(usersRepository, mailProvider);
  });


  it("should be able to create a new user", async () => {
    const userData: ICreateUserRequestDTO = { name: 'Novo Usuário', email: 'novousuario@test.test' }

    const result = await createUserUseCase.execute(userData);

    expect(result).toBe(true);
  });

  it("should not be able to create an existing user", async () => {
    const data: ICreateUserRequestDTO = { name:'Usuário Usado', email:'naoexabgciste@test.test' }
    
    await createUserUseCase.execute(data);

    await createUserUseCase.execute(data);

    expect(false);
  });
});
