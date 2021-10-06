import { User } from "../infra/typeorm/entities/User";

interface IUserRepository{
    create(data:ICreateUserDTO):Promise<User> 

    findByUserName(username:string):Promise<User> 

    findByEmail(email:string):Promise<User> 

    comparePassword(username: string,password:string):Promise<boolean>




}

export{IUserRepository}