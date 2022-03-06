import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgreSQLUsersRepository } from "../../repositories/implementations/PosgreSQLUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailTrapMailProvider = new MailtrapMailProvider();
const postgreSQLUsersRepository = new PostgreSQLUsersRepository();

const createUserUseCase = new CreateUserUseCase(
    postgreSQLUsersRepository,
    mailTrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };