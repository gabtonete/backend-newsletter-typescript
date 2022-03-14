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
          if (result === true) {

            return response.status(201).json({msg: "Create user succeeded"});
          } else if (result === false){
            return response.status(200).json({msg: "User already exists"});
          }

        } catch (err) {
          return response.status(500).json({
            message: err.message || 'Unexpected error.'
          })
        }
    } 
}