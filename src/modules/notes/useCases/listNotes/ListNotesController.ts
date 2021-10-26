
import{Request, Response} from "express"
import { container } from "tsyringe"
import { ListNotesUseCase } from "./ListNotesUseCase"



class ListNoteController{
    async handle(request: Request, response: Response){

        const {user_id} = request.params

        const list = container.resolve(ListNotesUseCase)

        const list2 = await list.execute(user_id)

        console.log(list2)

        return response.json(list2)

    }
}

export{ListNoteController};