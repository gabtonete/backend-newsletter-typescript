import { UserEntity } from "../../entities/UserEntity";
import { IUsersRepository } from "../IUsersRepository";

export class InMemoryUsersRepository implements IUsersRepository {
    private users: UserEntity[] = [];
    
    async findByEmail(emailReceived: string): Promise<boolean> {
        const userExist = this.users.some(user => user.email === emailReceived);
        if(userExist){
            return true;
        }
    }

    async save(user: UserEntity): Promise<void> {
        this.users.push(user);
    }
}