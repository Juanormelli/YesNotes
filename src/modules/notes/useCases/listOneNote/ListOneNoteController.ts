
import{Request, Response} from "express"
import { container } from "tsyringe"

import { ListOneNoteUseCase } from "./ListOneNoteUseCase"



class ListOneNoteController{
    async handle(request: Request, response: Response){

        const id = request.params.id

        const list = container.resolve(ListOneNoteUseCase)

        const list2 = await list.execute(id)

      

        return response.json(list2)

    }
}

export{ListOneNoteController};