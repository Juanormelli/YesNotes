
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../error/AppError';
import { Note } from '../../typeorm/entities/Notes';
import { NotesRepository } from '../../typeorm/repositories/NotesRepository';


@injectable()
class ListNotesUseCase{
    constructor(
        @inject("NotesRepository")
        private notesRepository: NotesRepository,
    ){}

    async execute(user_id:string): Promise<Note[]>{
        const list = await this.notesRepository.findByUserId(user_id)

        if(list.length<=0){
            throw new AppError("You Dont Have notes, create your first note for see her")
        }

        return list
    }


}

export{ListNotesUseCase}