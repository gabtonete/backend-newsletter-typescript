import { UserEntity } from "../entities/UserEntity";

export interface IUsersRepository {
    findByEmail(email: string) : Promise<boolean>;
    save(user: UserEntity): Promise<void>;
}