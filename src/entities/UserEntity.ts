import { uuid } from 'uuidv4';

export class UserEntity {
    readonly id: string = uuid();
    public name: string;
    public email: string;
    public password: string;
    
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}