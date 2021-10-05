
import { AppError } from "../../../../error/AppError";
import { UsersRepositoryInMemory } from "../../repositories/inmemory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "./CreateUserUseCase";

let usersRepository: UsersRepositoryInMemory
let createUserUseCase:CreateUserUseCase

describe("Create Users Test", () => {
    beforeEach(() => {
        usersRepository = new UsersRepositoryInMemory()
        createUserUseCase=new CreateUserUseCase(usersRepository)

    })

    it("Should be able to create users", async () => {
        const user ={
            username:"Juan",
            password: "Teste",
            email: "juan@teste.com.br"
        }
        const userCreated =await createUserUseCase.execute(user)

        

        expect(userCreated).toHaveProperty("id")

        


    })
    it("Should not be able to create users with same e-mail", async () => {
        await createUserUseCase.execute({
            username:"Juan",
            password: "Teste",
            email: "juan@teste.com.br"
        })
        
        await expect(
            
            createUserUseCase.execute({
                username:"Juan2",
                password: "Teste",
                email: "juan@teste.com.br"
            }),
            
        ).rejects.toEqual(new AppError("Email already in use"))
    })
    it("Should not be able to create users with same username", async () => {
        await createUserUseCase.execute({
            username:"Juan",
            password: "Teste",
            email: "juan@teste.com.br"
        })
        
        await expect(
            
            createUserUseCase.execute({
                username:"Juan",
                password: "Teste",
                email: "juan@teste2.com.br"
            }),
            
        ).rejects.toEqual(new AppError("Username already in use!"))
    })
})