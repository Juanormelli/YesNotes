import { getRepository, Repository } from "typeorm";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { User } from "../entities/User";



class UsersRepository implements IUserRepository {
    private repository: Repository<User>

    constructor(){
        this.repository = getRepository(User)
    }

    async create({username, password, email, id}:ICreateUserDTO): Promise<User> {

        const user = await this.repository.create({username, password, email, id})


        await this.repository.save(user)

        return user
        
    }
    async findByUserName(username: string): Promise<User> {
        const user = await this.repository.findOne({username})

        return user


    }
    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({email})

        return user
    }
    
}

export {UsersRepository}