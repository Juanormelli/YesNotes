import { ICreateNoteDTO } from "../dtos/ICreateNoteDTO";
import { Note } from "../typeorm/entities/Notes";


interface INotesRepository{
    create(data:ICreateNoteDTO):Promise<void>;


    findByUserId(user_id:string):Promise<Note[]>;

    update(id:string, content:string):Promise<void>;

    delete(id:string):Promise<Note>
}


export {INotesRepository}