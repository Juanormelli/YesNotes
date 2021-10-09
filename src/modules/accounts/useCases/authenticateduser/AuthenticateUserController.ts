
import {Request, Response} from "express"
import { container } from "tsyringe";
import { SimpleConsoleLogger } from "typeorm";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController{
    async handle(request: Request, response: Response):Promise<Response>{
        const {username, password} = request.body

        console.log(username)
        
        const authUser = container.resolve(AuthenticateUserUseCase)

        const user = await authUser.execute({username, password});
        
        
        

        return response.json(user).send();
    }
}

export {AuthenticateUserController}