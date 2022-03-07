import { UserEntity } from "../entities/UserEntity";
import { User } from "../models/User";


export interface IUsersRepository {
    findByEmail(email: string) : Promise<User>;
    save(user: UserEntity): Promise<void>;
}