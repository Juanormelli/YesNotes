
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../error/AppError';
import { Note } from '../../typeorm/entities/Notes';
import { NotesRepository } from '../../typeorm/repositories/NotesRepository';


@injectable()
class DeleteNotesUseCase{
    constructor(
        @inject("NotesRepository")
        private notesRepository: NotesRepository,
    ){}

    async execute(id:string): Promise<void>{
        const note = await this.notesRepository.findById(id)
        
        if(!note){
            throw new AppError("Note not exists")
        }

        await this.notesRepository.delete(id)

        

        
    }


}

export{DeleteNotesUseCase}