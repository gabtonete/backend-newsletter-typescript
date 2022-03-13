import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserController {
    constructor (
        private createUserUseCase : CreateUserUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const data: ICreateUserRequestDTO = {
          name: request?.body?.name,
          email: request?.body?.email
        }

        try {
          await this.createUserUseCase.execute(data)
          
          return response.status(201).json({msg: "Usuário criado com sucesso"});  
        } catch (err) {
          return response.status(400).json({
            message: err.message || 'Unexpected error.'
          })
        }
    } 
}