import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class PostgreSQLUsersRepository implements IUsersRepository {
    private users: User[] = [];
    
    async findByEmail(email: string): Promise<User> {
        const user = await this.users.find(user => user.email === email);

        return user;
    }

    async save(user: User): Promise<void> {
        await this.users.push(user);
    }
}