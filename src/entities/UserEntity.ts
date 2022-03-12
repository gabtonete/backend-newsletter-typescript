import { uuid } from "uuidv4";

export class UserEntity {
    public id?: string;
    public name: string;
    public email: string;

    constructor(name, email) {
        this.id = uuid();
        this.name = name;
        this.email = email;
    }
}