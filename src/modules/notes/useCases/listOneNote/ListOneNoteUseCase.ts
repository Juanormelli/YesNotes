
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../error/AppError';
import { Note } from '../../typeorm/entities/Notes';
import { NotesRepository } from '../../typeorm/repositories/NotesRepository';
import { ListNotesUseCase } from '../listNotes/ListNotesUseCase';


@injectable()
class ListOneNoteUseCase{
    constructor(
        @inject("NotesRepository")
        private notesRepository: NotesRepository,
    ){}

    async execute(id:string): Promise<Note>{
        const note = await this.notesRepository.findById(id)

        
        return note
    }


}

export{ListOneNoteUseCase}