
import{Request, Response} from "express"
import { container } from "tsyringe"
import { CreateNotesUseCase } from "./CreateNotesUseCase"



class CreateNotesController{
    async handle(request: Request, response: Response){
        const {user_id} = request.params
        const {content, title} = request.body
        

        

        const createNote = container.resolve(CreateNotesUseCase)

        const note=  await createNote.execute(user_id,content,title)


        return response.json(note).send()
    }
}


export {CreateNotesController}