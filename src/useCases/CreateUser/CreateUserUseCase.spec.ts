import { PostgresUsersRepository } from '../../repositories/implementations/PostgresUsersRepository';
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
    usersRepository = new PostgresUsersRepository();
    mailProvider = new GmailMailProvider();
    createUserUseCase = new CreateUserUseCase(usersRepository, mailProvider);
  });


  it("should be able to create a new user", async () => {
    const userData: ICreateUserRequestDTO = { name: 'usuarioNovo', email: 'novousuario@test.test' }

    await createUserUseCase.execute(userData);

  });

  it("should not be able to create an existing user", async () => {
    const data: ICreateUserRequestDTO = { name:'abc',email:'naoexabgciste@test.test' }
    
    async function received() {
      await createUserUseCase.execute(data);
      await createUserUseCase.execute(data)
    }

    expect(received).rejects.toEqual(new Error("User already exists"));

  });
});
