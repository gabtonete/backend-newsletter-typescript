import { UserEntity } from "../../entities/UserEntity";
import { User } from "../../models/User";

import { IUsersRepository } from "../IUsersRepository";

export class SqLiteUsersRepository implements IUsersRepository {
    
    async findByEmail(emailParam: string): Promise<User> {
        console.log(emailParam)
        const userDb = await User.findOne({ where: { email: emailParam } });
        return userDb;
    }

    async save(user: UserEntity): Promise<void> {
        await User.create({ id: user.id, name: user.name, email: user.email, password: user.password });
    }
}