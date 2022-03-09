import { uuid } from "uuidv4";

export class UserEntity {
    public id?: string;
    public name: string;
    public email: string;
    public password: string;
    
    constructor(name, email, password ) {
        this.id = uuid();
        this.name = name;
        this.email = email;
        this.password = password;
    }
}