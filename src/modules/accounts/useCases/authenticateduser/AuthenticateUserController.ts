
import {Request, Response} from "express"
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController{
    async handle(request: Request, response: Response){
        const {username, password} = request.body
        
        const authUser = container.resolve(AuthenticateUserUseCase)

        const user = await authUser.execute({username, password});

        return response.json(user).send();
    }
}

export {AuthenticateUserController}