import {injectable, inject} from "tsyringe"
import { AppError } from "../../../../error/AppError";
import { IUserRepository } from "../../repositories/IUserRepository";
import {hash} from "bcryptjs"
import { User } from "../../infra/typeorm/entities/User";

@injectable()
class CreateUserUseCase{
    constructor(
        @inject("UsersRepository")
        private usersRepository:IUserRepository
        

    ){

    }

    async execute({username, password, email, id}:ICreateUserDTO): Promise<User>{
        const userAlreadyExistsByEmail = await this.usersRepository.findByEmail(email)

        if(userAlreadyExistsByEmail){
            throw await new AppError("Email already in use")
        }

        const userAlreadyExistsByUsername= await this.usersRepository.findByUserName(username)

        if (userAlreadyExistsByUsername){
            throw await new AppError("Username already in use!")
        }

        const passwordHash = await hash(password,8)

        const user =await this.usersRepository.create({username, password:passwordHash, email})

        return user




    }
}

export{CreateUserUseCase}