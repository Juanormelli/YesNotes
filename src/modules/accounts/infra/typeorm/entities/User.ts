
import {v4 as uuidv4} from "uuid"

import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("users")
class User{
    @PrimaryColumn()
    id:string

    @Column()
    username:string

    @Column()
    email:string

    @Column()
    password:string

    constructor(){
        if (!this.id){
            this.id = uuidv4()

        }
    }
}

export{User}