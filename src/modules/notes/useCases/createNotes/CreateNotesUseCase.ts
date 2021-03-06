import { inject, injectable } from "tsyringe";
import { NotesRepository } from "../../typeorm/repositories/NotesRepository";



@injectable()
class CreateNotesUseCase{
    constructor (
        @inject("NotesRepository")
        private notesRepository: NotesRepository,
    ){}


    async execute(user_id: string, content: string, title:string){

        

        const note =await this.notesRepository.create({user_id, content, title})

        return note
    }
}


export{CreateNotesUseCase}

