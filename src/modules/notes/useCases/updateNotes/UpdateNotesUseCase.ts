import { inject, injectable } from "tsyringe";
import { NotesRepository } from "../../typeorm/repositories/NotesRepository";



@injectable()
class UpdateNotesUseCase{
    constructor (
        @inject("NotesRepository")
        private notesRepository: NotesRepository,
    ){}


    async execute(id: string, content: string, title:string){

        

        const note =await this.notesRepository.update(id, content, title);

        return note
    }
}


export{UpdateNotesUseCase}

