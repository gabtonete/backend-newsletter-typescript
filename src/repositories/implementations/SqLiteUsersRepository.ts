import { UserEntity } from "../../entities/UserEntity";
import { synchronize } from "../../helpers/SqliteDBHelper";
import { User } from "../../models/User";

import { IUsersRepository } from "../IUsersRepository";

export class SqLiteUsersRepository implements IUsersRepository {

    async findByEmail(emailParam: string): Promise<boolean> {
        synchronize();
        const userDb = await User.findAll({ where: { email: emailParam } });
        if(userDb.length) {
            return true
        }
    }

    async save(user: UserEntity): Promise<void> {
        synchronize();
        await User.create({ id: user.id, name: user.name, email: user.email, password: user.password });
    }
}