
import{Request, Response} from "express"
import { container } from "tsyringe"
import { CreateNotesUseCase } from "./CreateNotesUseCase"



class CreateNotesController{
    async handle(request: Request, response: Response){
        const {user_id} = request.params
        const {content} = request.body

        

        const createNote = container.resolve(CreateNotesUseCase)

        await createNote.execute(user_id,content)


        return response.status(200).send()
    }
}


export {CreateNotesController}