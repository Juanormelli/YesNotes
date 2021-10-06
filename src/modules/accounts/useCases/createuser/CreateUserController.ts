import {Request, Response} from "express"
import{container} from "tsyringe"
import { CreateUserUseCase } from "./CreateUserUseCase"




class CreateUserController{
    async handle(request: Request, response: Response): Promise<Response>{

        const {username, password, email, id} = request.body
        
        const createUser = container.resolve(CreateUserUseCase)

        await createUser.execute({
            username,
            email,
            password,
            id
        })


        return response.send().status(200)
    }
}

export {CreateUserController} 