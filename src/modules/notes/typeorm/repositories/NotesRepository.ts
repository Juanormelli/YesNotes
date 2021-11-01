import { getRepository, Repository } from "typeorm";
import { ICreateNoteDTO } from "../../dtos/ICreateNoteDTO";
import { INotesRepository } from "../../repositories/INotesRepository";
import { Note } from "../entities/Notes";




class NotesRepository implements INotesRepository{

    private repository: Repository<Note>

    constructor(){
        this.repository = getRepository(Note)
    }
    async findById(id: string): Promise<Note> {
        const note = await this.repository.findOne(id)
        return note
    }


    async create({user_id, content, title}:ICreateNoteDTO): Promise<void> {
        const note = this.repository.create({
            user_id,
            content, 
            title
        })

        await this.repository.save(note)
    }
    async findByUserId(user_id: string): Promise<Note[]> {
        return await this.repository.find({user_id})
    }



    async update(id: string, content:string): Promise<void> {
        const note = await this.repository.findOne(id)

        note.content = content

        await this.repository.save(note)
    }


    async delete(id: string): Promise<void> {
        
        await this.repository.delete(id)


    }

}

export{NotesRepository}