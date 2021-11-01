import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "../../../accounts/infra/typeorm/entities/User";
import {v4 as uuid} from "uuid"




@Entity("notes")
class Note{
    @PrimaryColumn()
    id: string

    @Column()
    user_id:string

    @ManyToOne(()=>User)
    @JoinColumn({name: "user_id",})
    user:User

    @CreateDateColumn()
    created_at: Date

    @Column()
    content:string

    @Column()
    title:string



    constructor(){
        if(!this.id){
            this.id = uuid();
        }

    }
} 

export{Note}