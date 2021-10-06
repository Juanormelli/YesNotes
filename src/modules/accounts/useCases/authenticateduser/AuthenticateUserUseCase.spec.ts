import { AppError } from "../../../../error/AppError"
import { UsersRepositoryInMemory } from "../../repositories/inmemory/UsersRepositoryInMemory"
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"


let usersRepositoryInMemory : UsersRepositoryInMemory

let authenticateUserUseCase: AuthenticateUserUseCase

describe("Auth user", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory()
        authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory)
    })

    it("should be able to auth user", async() => {
        const user = await usersRepositoryInMemory.create({ 
            username:"teste",
            password:"test",
            email:"test"
        })
        const password = user.password
        const username = user.username

        const compare = await authenticateUserUseCase.execute({username, password})

        expect(compare).toHaveProperty("id")
    })
    it("should be not abble login with incorrect username",async()=>{
        await usersRepositoryInMemory.create({ 
            username:"teste2",
            password:"test",
            email:"test2"
        })
        await expect(

            authenticateUserUseCase.execute({username:"test" ,password:"test"})
        ).rejects.toEqual(new AppError("Username or password is incorect!"))
    })

    it("should be not abble login with incorrect password",async()=>{
         await usersRepositoryInMemory.create({ 
            username:"teste3",
            password:"test",
            email:"test2"
        })
        await expect(
            authenticateUserUseCase.execute({username:"teste3" ,password:"test2"})
        ).rejects.toEqual(new AppError("Username or password is incorect!"))
    })
})