import { GmailMailProvider } from "../../providers/implementations/GmailMailProvider";
import { SqLiteUsersRepository } from "../../repositories/implementations/SqLiteUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const gmailMailProvider = new GmailMailProvider();
const sqLiteUsersRepository = new SqLiteUsersRepository();

const createUserUseCase = new CreateUserUseCase(
    sqLiteUsersRepository,
    gmailMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };