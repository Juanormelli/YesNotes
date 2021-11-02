
import{Request, Response} from "express"
import { container } from "tsyringe"

import { UpdateNotesUseCase } from "./UpdateNotesUseCase"



class UpdateNotesController{
    async handle(request: Request, response: Response){
        const {id} = request.params

        const {content, title} = request.body
        
        // console.log(content)
        

        const updateNote = container.resolve(UpdateNotesUseCase)

        const note =  await updateNote.execute(id,content,title)


        return response.json(note).send()
    }
}


export {UpdateNotesController}