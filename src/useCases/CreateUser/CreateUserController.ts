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
          const result = await this.createUserUseCase.execute(data)

          if (result !== 'User already exists') {
            return response.status(200).json({msg: "Create user succeeded"});

          } else {
            return response.status(400).json({msg: "User already exists"});
          }

        } catch (err) {
          return response.status(500).json({
            message: err.message || 'Unexpected error.'
          })
        }
    } 
}