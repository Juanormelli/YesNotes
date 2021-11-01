
import{Request, Response} from "express"
import { container } from "tsyringe"
import { DeleteNotesUseCase } from "./DeleteNotesUseCase"




class DeleteNotesController{
    async handle(request: Request, response: Response){

        const id = request.body

        const deleteNote = container.resolve(DeleteNotesUseCase)

        await deleteNote.execute(id)

        

        return response.status(200).send()

    }
}

export{DeleteNotesController};