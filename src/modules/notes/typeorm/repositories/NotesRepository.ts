import { getRepository, Repository } from "typeorm";
import { ICreateNoteDTO } from "../../dtos/ICreateNoteDTO";
import { INotesRepository } from "../../repositories/INotesRepository";
import { Note } from "../entities/Notes";




class NotesRepository implements INotesRepository{

    private repository: Repository<Note>

    constructor(){
        this.repository = getRepository(Note)
    }


    async create({user_id, content}:ICreateNoteDTO): Promise<void> {
        const note = this.repository.create({
            user_id,
            content
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
    async delete(id: string): Promise<Note> {
        const note = await this.repository.findOne(id)

        await this.repository.createQueryBuilder().delete().where("id = :id",{id:id}).execute()

        return note 

    }

}

export{NotesRepository}