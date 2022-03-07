import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { SqLiteUsersRepository } from "../../repositories/implementations/SqLiteUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailTrapMailProvider = new MailtrapMailProvider();
const sqLiteUsersRepository = new SqLiteUsersRepository();

const createUserUseCase = new CreateUserUseCase(
    sqLiteUsersRepository,
    mailTrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };